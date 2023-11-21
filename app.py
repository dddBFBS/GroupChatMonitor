from flask import Flask,render_template,jsonify
from wsgiref.simple_server import make_server
from flask_sqlalchemy import SQLAlchemy

import sqlite3
import os


app = Flask(__name__)

#获取四分栏所需要数据
@app.route('/api/message_count')
def get_message_count():
    # 连接到数据库
    conn = sqlite3.connect('demo1.db')
    cursor = conn.cursor()

    # 查询消息总数
    cursor.execute("SELECT COUNT(*) FROM MsgTable")
    count = cursor.fetchone()[0]
    # 查询危险图片总数
    cursor.execute("SELECT COUNT(*) FROM MsgTable WHERE ContentAssessment='相对危险' OR ContentAssessment='高度危险'")
    dangercount = cursor.fetchone()[0]
    # 计算危险图片占比
    dpercent = dangercount/count
    # 关闭数据库连接
    conn.close()

    # 返回数据
    return jsonify({'message_count': count, 'danger_count': dangercount, 'danger_percentage': dpercent})




# 获取图表所需数据
@app.route('/api/chart1data')
def get_chart1_data():
    # 连接到数据库
    conn = sqlite3.connect('demo1.db')
    cursor = conn.cursor()

    #查询
    cursor.execute("SELECT DISTINCT strftime('%Y-%m-%d', Timestamp) AS unique_dates FROM MsgTable;")
    result1 = cursor.fetchall()
    date = [row[0] for row in result1]

    cursor.execute("""
        SELECT COUNT(MsgTable.ImageType) AS EntityCount
        FROM (
            SELECT DISTINCT Timestamp
            FROM MsgTable
        ) AS dates
        LEFT JOIN MsgTable ON dates.Timestamp = MsgTable.Timestamp
            AND MsgTable.ImageType='虚拟'
            AND (MsgTable.ContentAssessment='相对危险' OR MsgTable.ContentAssessment='高度危险')
        GROUP BY dates.Timestamp
    """)
    result2 = cursor.fetchall()
    dfcount = [row[0] for row in result2]

    cursor.execute("""
        SELECT COUNT(MsgTable.ImageType) AS EntityCount
        FROM (
            SELECT DISTINCT Timestamp
            FROM MsgTable
        ) AS dates
        LEFT JOIN MsgTable ON dates.Timestamp = MsgTable.Timestamp
            AND MsgTable.ImageType='实体'
            AND (MsgTable.ContentAssessment='相对危险' OR MsgTable.ContentAssessment='高度危险')
        GROUP BY dates.Timestamp
    """)
    result3 = cursor.fetchall()
    drcount = [row[0] for row in result3]

    cursor.execute("""
        SELECT COUNT(MsgTable.ImageType) AS EntityCount
        FROM (
            SELECT DISTINCT Timestamp
            FROM MsgTable
        ) AS dates
        LEFT JOIN MsgTable ON dates.Timestamp = MsgTable.Timestamp
            AND MsgTable.ImageType='文本'
            AND (MsgTable.ContentAssessment='相对危险' OR MsgTable.ContentAssessment='高度危险')
        GROUP BY dates.Timestamp
    """)
    result4 = cursor.fetchall()
    dtcount = [row[0] for row in result4]

    # 关闭数据库连接
    conn.close()

    # 返回数据
    return jsonify({'date': date, 'dfcount': dfcount, 'drcount': drcount, 'dtcount': dtcount})

@app.route('/api/chart2data')
def get_chart2_data():
    # 连接到数据库
    conn = sqlite3.connect('demo1.db')
    cursor = conn.cursor()

    #查询
    cursor.execute("SELECT DISTINCT strftime('%Y-%m-%d', Timestamp) AS unique_dates FROM MsgTable;")
    result1 = cursor.fetchall()
    date = [row[0] for row in result1]

    cursor.execute("SELECT COUNT(*) FROM MsgTable GROUP BY Timestamp")
    result2 = cursor.fetchall()
    daycount = [row[0] for row in result2]

    cursor.execute("""
                SELECT COUNT(MsgTable.ContentAssessment) AS EntityCount
                FROM (
                    SELECT DISTINCT Timestamp
                    FROM MsgTable
                ) AS dates
                LEFT JOIN MsgTable ON dates.Timestamp = MsgTable.Timestamp
                    AND (MsgTable.ContentAssessment='相对危险')
                GROUP BY dates.Timestamp
            """)
    result3 = cursor.fetchall()
    ldangercount = [row[0] for row in result3]

    cursor.execute("""
            SELECT COUNT(MsgTable.ContentAssessment) AS EntityCount
            FROM (
                SELECT DISTINCT Timestamp
                FROM MsgTable
            ) AS dates
            LEFT JOIN MsgTable ON dates.Timestamp = MsgTable.Timestamp
                AND (MsgTable.ContentAssessment='高度危险')
            GROUP BY dates.Timestamp
        """)
    result4 = cursor.fetchall()
    hdangercount = [row[0] for row in result4]


    # 关闭数据库连接
    conn.close()

    # 返回数据
    return jsonify({'date': date, 'daycount': daycount, 'ldangercount': ldangercount, 'hdangercount': hdangercount })


def get_member_data():
    conn = sqlite3.connect('demo1.db')
    cursor = conn.cursor()
    cursor.execute("""
           SELECT Nickname, QQNumber, 
           CASE Role 
               WHEN '0' THEN '群主' 
               WHEN '1' THEN '管理员' 
               WHEN '2' THEN '普通成员' 
               END as RoleDescription, 
           COUNT(*) as MessageCount,
           (SELECT COUNT(*) FROM MsgTable WHERE QQNumber = m.QQNumber AND MessageType = '1' AND ContentAssessment != '相对安全' AND ContentAssessment != '高度安全') AS DangerCount
           FROM MsgTable m
           GROUP BY QQNumber
           ORDER BY Role
       """)
    data = cursor.fetchall()
    conn.close()
    return data

@app.route('/')
def index():  # put application's code here

    member_data = get_member_data()
    return render_template("index.html", members=member_data)

if __name__ == '__main__':
    # app.run()

    httpd = make_server('127.0.0.1', 5000, app)
    httpd.serve_forever()
    # app.run(debug=True)



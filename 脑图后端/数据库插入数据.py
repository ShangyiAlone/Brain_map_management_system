import pymysql

#建立连接
conn = pymysql.connect(
  host="localhost",
  # host="192.168.1.112",
  user="root",  #用户名
  passwd="123",#用户密码
  db ="检测小车")#数据库名

#创建游标，默认是元组型
cursor = conn.cursor()
id=4
#sql = "select * from t_plane"#数据库中表的名
sql = '''INSERT INTO t_plane(id,x,y) VALUES(num,7,2);''' #数据库中表的名
sql=sql.replace("num",str(id))
print(sql)

cursor.execute(sql)
conn.commit()
id+=1

cursor.close()
conn.close()


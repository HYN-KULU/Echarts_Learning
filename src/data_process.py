import pandas as pd
data = pd.read_csv(
    "./final.csv", header=None)
# 必须添加header=None，否则默认把第一行数据处理成列名导致缺失
data = data.values.tolist()

for i in range(len(data)):
    for j in range(1, 7):
        data[i][j] = float(data[i][j])

newdata = []
for i in range(1, len(data)):
    if (data[i][1] > 0.05):
        newdata.append(data[i])

namelist = []
rurallist = []
urbanlist = []

for i in range(len(newdata)):
    namelist.append(newdata[i][0])
    rurallist.append(newdata[i][3])
    urbanlist.append(newdata[i][5])

print(namelist)
print(rurallist)
print(urbanlist)

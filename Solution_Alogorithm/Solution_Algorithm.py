# -*- coding: utf-8 -*-
"""
Original file is located at
    https://colab.research.google.com/drive/1q8A15bIAZDkzYLOYTy_mZ6hsTDBT6VRP
"""

intList = []
evenArr = []
oddArr = []
def inputDef():
  if(intList == []):
    print("Input your array of numbers")
    a = input().split()
    if (len(a) == 5):
      for i in range (0, 5):
        intList.append(int(a[i]))
    elif(len(a)>5):
      for i in range (0, 5):
        intList.append(int(a[i]))
    else:
      print("Your input is wrong!")
  else:
    print("Your array is not empty, press 6 to clear it!")
      
def miniMaxSum():
  #list doesn't contain smallest value
  minOintList = intList.copy()
  #list doesn't contain highest value
  maxOintList = intList.copy()
  for i in range(0, len(minOintList)-1):
    if (minOintList[i]==min(minOintList)):
      minOintList.remove(minOintList[i])

  for i in range(0, len(maxOintList)-1):
    if (maxOintList[i]==max(maxOintList)):
      maxOintList.remove(maxOintList[i])
  print(sum(minOintList),sum(maxOintList))
    
def countTotal():
  print("Total of array is:",sum(intList))

def minMaxValue():
  print("Min value is:",min(intList),"Max value is:",max(intList))

def evenNodd():
  for i in range(0, len(intList)):
    if(intList[i]%2==0):
      evenArr.append(intList[i])
    else:
      oddArr.append(intList[i])
  print("Even values are:",evenArr,"\nOdd values are:",oddArr)

if __name__=='__main__':
  while True:
    print("====================================menu=========================================")
    print("1. Input array\n")
    print("2. Find min and max sum\n")
    print("3. Total value of array\n")
    print("4. Find min and max value of array\n")
    print("5. Find even and odd values in array\n")
    print("6. Clear the array and do it again!\n")
    print("7. Exit\n")
    print("\n====================>Pls insert number function you want to excute!<===================\n")
    numberFunction = int(input())
    
    if numberFunction == 1:
      inputDef()
    elif numberFunction == 2:
      miniMaxSum()
    elif numberFunction == 3:
      countTotal()
    elif numberFunction == 4:
      minMaxValue()
    elif numberFunction == 5:
      evenNodd()
    elif numberFunction == 6:
      intList =[]
      evenArr = []
      oddArr = []
      continue
    else:
      if (intList == []):
        del(intList,evenArr,oddArr)
        break
      else:
        break


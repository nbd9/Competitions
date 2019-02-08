def troubleSort(list, listLen):
  done = False
  while not done:
    done = True
    for index in range(len(list)-2):
      if list[index] > list[index+2]:
        done = False
        list[index:index+3] = list[index:index+3][::-1]
  return list

# Start Program

t = int(input())  # number of inputs
for i in range(1, t + 1):
  listLength = int(input())
  list = [int(s) for s in input().split(" ")]
  troubledSort = troubleSort(list, listLength)

  # Check if trouledSort worked.
  value = "OK"
  highestNum = troubledSort[0]
  for index, num in enumerate(troubledSort):
    if highestNum > num:
      value = index-1
      break
    else:
      highestNum = num

  # Final Output
  print("Case #{}: {}".format(i, value))

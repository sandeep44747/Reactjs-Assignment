# arr=list(map(int,input().split()))
# target=int(input())
# arr.sort()
# l=0
# r=len(arr)-1
# while l<r:
#     if (arr[l]+arr[r])>target:
#         r-=1
#     elif (arr[l]+arr[r])<target:
#         l+=1
#     else:
#         print(l,r)
#         break
# print(l,r)


arr=list(map(int,input().split()))
k=int(input())
res=[]
i=0
j=0
while j<len(arr):
    if arr[j]<0:
        res.append(arr[j])
    if j-i+1<k:
        j+=1
    elif j-i+1==k:
        if len(res)==0:
            print(0)
        else:
            print(res[0])
            if arr[i]==res[0]:
                res.remove(res[0])
        i+=1
        j+=1

    


# https://leetcode.com/problems/two-sum/

def two_sum(nums_list: list, target: int) -> list:
  """ Uma lista de inteiros é passado. Um número inteiro é passado. É retornado os dois índices dos números na lista os quais sua soma é igual ao inteiro passado. """
  previous_numbers = []
  for current_number in nums_list:
      for index, old_num in enumerate(previous_numbers):
          if old_num + current_number == target:
              return [index, len(previous_numbers)]
      previous_numbers.append(current_number)
  return []

if __name__ == "__main__":
  target = int(input("Insira um inteiro como valor objetivado:\t"))
  nums_list = input("Insira os valores separados por vírgula:\t").split(",")
  nums_list = [int(num) for num in nums_list]
  if type(target) == int and type(nums_list) == list:
    print(two_sum(nums_list=nums_list, target=target))

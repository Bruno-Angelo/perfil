import time
import requests
from bs4 import BeautifulSoup as bsoup

links = []
titulos = []
lista_de_grupos = []
codigos = [0]*36
indice = 1
position = 0

#DETERMINAR QUANIDADE DE PÁGINAS A SEREM PERCORRIDAS
for qtd in range(10):
  url = 'https://gruposwhats.app/?page='+str(indice)
  site = requests.get(url)
  conteudo = site.text
  soup = bsoup(conteudo, 'html.parser')

  siteszap = soup.find_all('a', class_= 'btn btn-success btn-block stretched-link font-weight-bold')

  #CONSEGUIR OS SITES ESPECÍFICOS
  for sites_grupos in siteszap:
    a = sites_grupos.get('href')
    lista_de_grupos.append(a)
    codigos[position] = a[-6:]
    position +=1


  #PEGAR CADA GRUPO
  for i in codigos:
    url = 'https://gruposwhats.app/group/'+i
    response = requests.get(url)
    conteudo = response.text
    soup = bsoup(conteudo, 'html.parser')
      #Encontrar a caixa.
    grupo = soup.find('a', {'data-id': i})
      #Pegar o link da tag 'a'.
    link = grupo.get('data-url')
      #Encontrar o 'h5' e pegar o texto (título).
    div = grupo.parent
    titulo = div.find('h5').text
      #Armazenar nas listas.
    links.append(link)
    titulos.append(titulo)

  indice += 1

  #REDEFINIR POSIÇÃO
  if position == 36:
    position = 0  
grupos_dict = {
      'titulos': titulos,
      'link': links}


grupos_df = pd.DataFrame(grupos_dict, index=None)
grupos_df.to_csv('database.csv')
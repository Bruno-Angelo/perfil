import requests
from bs4 import BeautifulSoup

fatec = requests.get('https://telegrupos.com.br/')
conteudo = fatec.text
soup = BeautifulSoup(conteudo, 'html.parser')
titulogrupos= soup.find_all('class', class_='aneTemaAa85daad_70b80f')
linkgrupos = soup.find_all('a', class_='aneTemaAa85daad_25c368')

webcrawleer = []


for kayki_fatec in linkgrupos:
  webcrawleer.append(kayki_fatec.get('href'))

print(webcrawleer)

#Kayki
# Pokédex App

## Abordagem

A tela principal é responsavel por exibir os Pokémons em cards com uma imagem e nome , optei por um design mais simples e funcional seguindo uma abordagem focando em clareza e escalabilidade, O layout do site é totalmente responsivo e adaptavel a qualquer dispositivo. No estilo de codificação priorizei usar nomes de variaveis claros faceis de entender , funçoes com responsabilidade única e organização dos arquivos por funcionalidade services,pages etc

## 🛠️ Documentação Técnica

Tecnologias Principais
Angular 17+
Ionic Framework
TypeScript
PokéAPI REST

## 📁 Estrutura de Diretórios

```bash
src/
│
├── app/
│   ├── pages/
│   │   ├── home/
│   │   ├── details/
│   │   └── favoritos/
│   ├── services/
│   │   ├── pokemon.service.ts
│   │   └── favoritos.service.ts

```

## ✅ Funcionalidades

Listagem paginada de Pokémons com imagens e nomes.

Busca dinâmica que percorre todo o banco local.

Sistema de favoritos persistente com localStorage.

Página de detalhes com informações completas da API.

Layout responsivo para mobile, tablet e desktop.

## 🧪 Testes

Cobertura de lógica do serviço de favoritos.

Verificações de adicionar, remover e verificar favoritos.

# Como Rodar o projeto

```bash
# Clone o repositorio
git clone https://github.com/Guilherme0Medeiros/Pokedex

# instalar dependências
npm install

# rodar localmente
ionic serve

# rodar testes
ng test

```
## Imagens
<p align="center">
<img src="https://github.com/user-attachments/assets/4a4e3a50-cbcb-432e-ba53-d1a421f0cd67" height="350" />
<img src="https://github.com/user-attachments/assets/f490866c-69d9-4f42-ab9c-5c5d8d876bfb" height="350" />
<img src="https://github.com/user-attachments/assets/fd268ad8-f844-4ec9-afa6-9306dd01697c" height="350" />  
<img src="https://github.com/user-attachments/assets/7f68f45e-3ab0-4976-adfe-b50db9d262ba" height="350" />
</p>

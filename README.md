# 🛍️ E-commerce Mobile em React Native

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![Equipe](https://img.shields.io/badge/projeto-em%20equipe-blueviolet?style=flat-square)

Aplicativo de loja virtual desenvolvido como **projeto final da disciplina de React Native** da residência em software do **Serratec (2021)**.

O layout foi baseado no template [Ecommerce Mobile (Figma)](https://www.figmacrush.com/ecommerce-mobile-figma-template/), e os produtos vêm de uma API simulada no **MockAPI**.

## Telas e funcionalidades

- 🔐 **Login e cadastro**, com os dados salvos localmente via AsyncStorage
- 🏠 **Home** com categorias, *Best Sellers* e *Hot Sales*
- 📦 **Listagem e detalhes do produto**, com avaliação por estrelas e galeria de fotos
- 🛒 **Carrinho** com itens e totais
- 👤 **Perfil** do usuário
- 🧭 Navegação por **abas e pilha** (React Navigation)

## Organização do código

```
src/
├── Components/   # componentes reutilizáveis (cards, botões, headers, inputs...)
├── screens/      # telas: Home, Login, Cadastro, Produtos, Details, Card, Profile
└── assets/       # cores, fontes, imagens e dados de apoio
```

## Como executar

**Pré-requisitos:** Node.js, ambiente React Native CLI configurado (Android Studio + emulador ou celular em modo desenvolvedor).

```bash
npm install
npx react-native run-android
```

## Equipe

Projeto feito em grupo pelo time 3 do Serratec 2021: **Thamires Ramos**, Cristiny Boêta, Afonso Rodrigues, Junielson Tardin, João, Daniel e José.

---

Desenvolvido por [Thamires Ramos](https://github.com/ramosth) · [LinkedIn](https://linkedin.com/in/thamires-ramos/)

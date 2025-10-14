# 🧩 To-Do List — Projet Mastermind (Next.js + Tailwind)

## 🏗️ Étape 1 — Setup du projet
- [x] Initialiser le projet :
  ```bash
  npx create-next-app@latest mastermind
  cd mastermind
  npm install
  ```
- [x] Ajouter Tailwind CSS :
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- [x] Configurer Tailwind (`globals.css`, `tailwind.config.js`)
- [x] Créer la structure de base des pages dans `/app` ou `/pages`
- [x] Ajouter un layout global (`layout.tsx`) avec barre de navigation + footer

---

## 🎨 Étape 2 — Design & UI
- [x] Créer un **header/navbar** avec liens (Accueil, Jouer, Scores, Connexion)
- [x] Créer un **footer** simple
- [x] Mettre en place la **palette de couleurs**
- [ ] Définir les **composants réutilisables** :
- [ ] `Button`, `Card`, `Input`, `Modal`, `Alert`
- [x] `GameBoard` (plateau du Mastermind)
- [x] `ColorPeg` (pions)
- [x] `ScoreList` (tableau des scores)
- [ ] Tester le responsive design avec Tailwind

---

## 🧠 Étape 3 — Logique du jeu (Mastermind)
- [ ] Génération de la combinaison secrète
- [ ] Vérification des tentatives (bons pions / bonne position)
- [ ] Gestion des tentatives limitées
- [ ] États de jeu : en cours, gagné, perdu
- [ ] Calcul du score (basé sur les tentatives)
- [ ] Niveaux de difficulté
- [ ] Animation de victoire / défaite

---

## 🧍 Étape 4 — Authentification
- [ ] Installer **NextAuth.js** (ou Supabase/Auth0)
- [ ] Créer les pages `/signup` et `/login`
- [ ] Gérer la connexion persistante
- [ ] Protéger les routes `/game` et `/scores`
- [ ] Ajouter un bouton **Logout**

---

## 🏆 Étape 5 — Système de scores
- [ ] Créer un modèle de **score** (utilisateur, niveau, score, date)
- [ ] Choisir une base de données (`localStorage`, `Prisma + SQLite/PostgreSQL`)
- [ ] Sauvegarder le score à la fin d’une partie
- [ ] Afficher les scores sur `/scores`
- [ ] (Optionnel) Ajouter un **classement global**

---

## ⚙️ Étape 6 — Backend & API
- [ ] Créer des **API routes** (`/api/scores`, `/api/auth`, etc.)
- [ ] Gérer les requêtes POST/GET pour les scores
- [ ] Ajouter la validation des données (`zod` ou `yup`)

---

## 🌈 Étape 7 — Améliorations UX/UI
- [ ] Animations avec Framer Motion
- [ ] Mode sombre
- [ ] Page d’aide / règles du jeu
- [ ] Compteur de temps
- [ ] Effets sonores
- [ ] Système de badges / récompenses
- [ ] Profil utilisateur (stats, meilleurs scores)

---

## 🚀 Étape 8 — Déploiement
- [ ] Tester localement (`npm run build && npm start`)
- [ ] Déployer sur **Vercel**
- [ ] Configurer les variables d’environnement
- [ ] Vérifier la persistance des sessions

---

## 💡 Suggestions bonus
- [ ] Mode multijoueur
- [ ] Tableau de bord administrateur
- [ ] Sauvegarde automatique des parties
- [ ] PWA (progressive web app)
- [ ] Internationalisation (i18n)

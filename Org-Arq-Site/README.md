# Workflow do projeto

Utilizamos uma adaptação do Git Flow para garantir que o código em produção esteja sempre estável.

1. Main (Produção)
A branch sagrada.

Contém apenas código testado e pronto para produção.

Regra de Ouro: Nunca se faz commit direto na main. Ela só recebe Pull Requests (PRs) vindos da branch dev.

2. Dev (Desenvolvimento / Staging)
É o ponto de encontro de todas as novas funcionalidades.

Serve como base para a criação de novas branches de tarefas.

Ao finalizar uma tarefa, o merge deve ser feito aqui antes de ir para a main.

3. Branches de Tarefa (Feature, Fix, etc.)
Sempre criadas a partir da dev. O nome deve seguir a estrutura: tipo/categoria/descricao-breve.

Exemplos de Nomenclatura:

feat/animation/pulse-animation

fix/ui/button-alignment

chore/config/tailwind-setup

# Padrão de commits

Adotamos o Conventional Commits. Isso torna o log do Git legível para humanos e fácil de automatizar para máquinas.

Estrutura do Commit:
<tipo>[escopo opcional]: <descrição curta em minúsculas>

## Ciclo de trabalho (Passo a passo)

1. Sincronize sua dev: git checkout dev && git pull origin dev

2. Crie sua branch de tarefa: git checkout -b feat/feature-name

3. Trabalhe e commite: git commit -m "feat: minha nova feature"

4. Suba sua branch: git push origin feat/feature-name

5. Abra um Pull Request: Aponte sua branch para a dev.

6. Merge para a Main: Após a dev estar estável e aprovada, um responsável fará o PR da dev para a main.
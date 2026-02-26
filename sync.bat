@echo off
echo ==========================================
echo Sincronizando com o GitHub...
echo ==========================================

:: Adiciona todas as alteracoes
echo Adicionando arquivos...
git add .

:: Pede uma mensagem de commit (opcional)
set /p commitMsg="Digite a mensagem do commit (ou pressione Enter para usar padrao): "

if "%commitMsg%"=="" (
    set commitMsg="update: atualizacao automatica %date% %time%"
)

:: Faz o commit
echo.
echo Realizando commit...
git commit -m "%commitMsg%"

:: Baixa alteracoes remotas antes de enviar
echo.
echo Baixando atualizacoes do servidor...
git pull origin main

:: Envia para o repositorio remoto
echo.
echo Enviando para o GitHub...
git push origin main

echo.
echo ==========================================
echo Sincronizacao concluida com sucesso!
echo ==========================================
pause

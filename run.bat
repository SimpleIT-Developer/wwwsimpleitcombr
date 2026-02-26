@echo off
echo ==========================================
echo Iniciando o Servidor de Desenvolvimento...
echo ==========================================

:: Verifica se o node_modules existe, se não, instala as dependencias
if not exist node_modules (
    echo Instalando dependencias...
    call npm install
)

:: Inicia o servidor de desenvolvimento
echo.
echo Executando npm run dev...
call npm run dev

pause

#* Export variables d'environnements
export PGUSER=ecoroads
export PGPASSWORD=ecoroads

#* Deploy Global :
sqitch deploy  db:pg:ecoroads 01.init


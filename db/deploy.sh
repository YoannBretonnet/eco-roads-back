#* Export variables d'environnements
export PGUSER=ecoroads
export PGPASSWORD=ecoroads

#* Deploy Global :
#sqitch deploy  db:pg:ecoroads 01.init
sqitch deploy  db:pg:ecoroads 02.add_table_brand


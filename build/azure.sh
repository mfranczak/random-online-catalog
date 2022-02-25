#!/bin/bash
source ./build/.env.azure.build

if [ -z $1 ]; then echo "Missing service parameter"; exit; fi;
SERVICE=$1

if [ ! -d "./src/$SERVICE" ]; then echo "Service under ./src/$SERVICE DOES NOT exist."; exit; fi;

# --build-arg dt_cluster=${DT_CLUSTER} --build-arg dt_token=${DT_TOKEN} 

# echo "${ACR_REPOSITORY}/${SERVICE}"

docker build -t "${ACR_REPOSITORY}/${SERVICE}":latest ./src/$SERVICE
docker push "${ACR_REPOSITORY}/${SERVICE}"
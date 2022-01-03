# Random Online Catalog
Basic application that displays catalog items and ads.

## Services
### frontend
Serves index.html and collects data from internal services to display ads and catalog items.

#### configuration 
(envs)

### catalogservice
Returns catalog items. Limit is a hardcoded parameter.

### adservicep
Simulates personalized ads network. It pretends to do external API calls and it fails due to timeouts.

#### configuration 
(envs)

### adservice
Simulates a legacy solution for ads that has issues with memory and is slow.

#### configuration 
(envs)


## Architecture
Frontend is the only exposed service. Frontend calls *adservicep* for personalised Ads. If the PersonalisedAdsNetwork fails than it fallsback to LegacyAdService (*adservice*) for ads.


## Running on minikube
Before building docker images locally, remember to first `minikube start` and then `eval $(minikube docker-env)` and use `imagePullPolicy: Never`
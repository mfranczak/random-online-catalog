# Random Online Catalog
Basic application that displays catalog items and ads.

## Services
### frontend
Serves index.html and collects data from internal services to display ads and catalog items.

| configuration variables |  |
| - | - |
| AD_SERVICE_ADDR | address of AdService either adservicep or adservice |
| CATALOG_SERVICE_ADDR | address of CatalogService |

### catalogservice
Returns catalog items. Limit is a hardcoded parameter.

### adservicep
Simulates personalized ads network. It pretends to do external API calls and it fails due to timeouts.

| configuration variables |  |
| - | - |
| AD_SERVICE_ADDR | AdService fallback when PersonalizedNetwork has issues |
| WAITING_TIME_MAX | PersonalizedNetwork returns Ad in random time from 0 to WAITING_TIME_MAX |
| WAITING_TIME_TIMEOUT | If PersonalizedNetwork waiting time is longer than WAITING_TIME_TIMEOUT then Timeout event is reported and no Ad will be returned. |

### adservice
Simulates a legacy solution for ads that has issues with memory and is slow. Algorithm first generates GENERATE_AD_VARIANTS_MAX ad variants and then selects one.

| configuration variables |  |
| - | - |
| GENERATE_AD_VARIANTS_MAX | The higher the number the larger memory consumption and response time |


## Architecture
Frontend is the only exposed service. Frontend calls *adservicep* for personalised Ads. If the PersonalisedAdsNetwork fails than it fallsback to LegacyAdService (*adservice*) for ads.


## Running on minikube
Before building docker images locally, remember to first `minikube start` and then `eval $(minikube docker-env)` and use `imagePullPolicy: Never`

## Locust load generator
```
docker run -p 8089:8089 -v $PWD:/mnt/locust locustio/locust -f /mnt/locust/locustfile.py
```

## Resources
- https://betterprogramming.pub/docker-for-node-js-in-production-b9dc0e9e48e0
- 
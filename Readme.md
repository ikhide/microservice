# Microservice Blog

This is a simple blog with an asynchronous microservice architecture on the back-end. All requests are handled by an event-bus and routed to appropriate services. This architecture provides the benefit of the application not shutting down when one of the services fail for some reason. It is served locally with kubernetes and skaffold, load balancing is handled with ingress-nginx.

## Steps to run

- Got to your hosts file on `/etc/hosts` on mac or `c:\Windows\System32\Drivers\etc\hosts` on widows and paste in the command `127.0.0.1 posts.com`.
- From the root folder, run the command `skaffold build` then `skaffold dev`

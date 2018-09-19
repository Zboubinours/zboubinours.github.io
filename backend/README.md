# How to use

I always forget commands name so I'll just write them down here.

I've been using the [Quickstart: Compose and
Django](https://docs.docker.com/compose/django/).

Since this project uses 2 different docker containers, we need to use
`docker-compose` instead of the regular `docker` command.

* Use `docker-compose build` to create the image.
* Use `docker-compose up` to start the image.
* Use `docker-compose run [SERVICE_NAME] [YOUR_COMMAND]` to run commands inside
  the docker container.

> Examples: `docker-compose run web python manage.py runserver`
> `web` being the django container's name.

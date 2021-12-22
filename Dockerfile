FROM ruby:2.6

ENV DOCKERIZE_VERSION v0.6.1

RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
  apt-get install -y --no-install-recommends\
  nodejs  \
  mariadb-client  \
  yarn \
  build-essential  \
  wget \
  && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /Kyo-Ron

COPY Gemfile /Kyo-Ron/Gemfile
COPY Gemfile.lock /Kyo-Ron/Gemfile.lock

RUN gem install bundler
RUN yarn install --check-files
RUN bundle install

ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY ${RAILS_MASTER_KEY}

ADD . /Kyo-Ron

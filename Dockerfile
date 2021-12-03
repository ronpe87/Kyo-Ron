FROM ruby:2.6
RUN apt-get update\
  && apt-get install -y --no-install-recommends\
  nodejs  \
  mariadb-client  \
  build-essential  \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /Kyo-Ron

COPY Gemfile /Kyo-Ron/Gemfile
COPY Gemfile.lock /Kyo-Ron/Gemfile.lock

RUN gem install bundler
RUN bundle install

ADD . /Kyo-Ron

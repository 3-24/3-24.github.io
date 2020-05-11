#!/bin/bash
sudo apt-get -y install gcc make zlib1g-dev sqlite3 automake autoconf libtool build-essential
sudo apt-get -y install ruby ruby-dev
sudo gem install bundler -v "$(grep -A 1 "BUNDLED WITH" Gemfile.lock | tail -n 1)"
bundle install
bundle update

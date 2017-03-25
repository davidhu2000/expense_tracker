# Expense Tracker

To set up this project in your local environment.

1) Open terminal and change into your projects directory
2) run `git clone https://github.com/davidhu2000/expense_tracker.git` then `cd expense_tracker`
3) run `bundle install` to install the Ruby gems.
4) run `rake db:create`, `rake db:seed` to setup `postgresql` database.
5) run `npm install` to install the necessary node modules. `webpack` will run as a postinstall script.
6) ensure postgres is running. If not, click [here](https://www.postgresql.org/download/) to download.
6) run `rails s` to browse the site at `localhost:3000`


### Tests
**Frontend Tests**
```
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/expense_spec.rb
bundle exec rspec spec/controllers/users_controller_spec.rb
bundle exec rspec spec/controllers/sessions_controller_spec.rb
bundle exec rspec spec/controllers/expenses_controller_spec.rb
```

or

`bundle exec rspec` to run all specs

--------------------------------------------------------------------

To run individual tests

```
npm test expense_tracker-test.js
```

or `npm test` to run all tests

**Frontend Tests**
1. `frontend/__tests__/expense_tracker-test.js`
2. `frontend/__tests__/store-test.js`
3. `frontend/__tests__/reducer-test.js`
4. `frontend/__tests__/session_actions-test.js`
5. `frontend/__tests__/session_api_util-test.js`
6. `frontend/__tests__/session_form-test.js`
7. `frontend/__tests__/expenses_actions-test.js`
8. `frontend/__tests__/expenses_util-test.js`

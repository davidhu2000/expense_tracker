# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = ['gigster', 'test_robot', 'another_robo']

users.each do |user|
  User.create!(
    username: user,
    password: 'password'
  )
end

100.times do |i|
  Expense.create!(
    user_id: rand(3) + 1,
    amount: rand(50000) / 100.0,
    description: Faker::Hacker.noun,
    expense_date: Faker::Date.between(1.years.ago, Date.today)
  )
end

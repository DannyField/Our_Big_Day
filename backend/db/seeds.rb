# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Adding task entry'

Task.create(
    title: 'Confirm the wedding venue and location', 
    body: 'Looking at Sorrento at the moment. A beach wedding', 
    task_date: '23rd June 2020', 
    due_date: 'July 2020',
    contact_name: 'Shelle and Dean', 
    contact_email: 'dean@allsmiles.com.au', 
    contact_mobile: '0459 178 780', 
    image: '', 
    extra_info: 'Still trying to decide. The date planned is Monday 12th of April 2021',  
    completed: false)

puts 'Task created'
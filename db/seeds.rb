Patient.destroy_all

puts "Seeding..."
10.times do |i|
  Patient.create!(
    name: Faker::Name.name  
  )
end

puts "Done..."
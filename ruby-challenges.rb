# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDOCODE:
# Input: Array of strings and a single letter as arguments
# Output: New array of all the words containing the letter that was passed as an argument
# Process:
# Create a method called that_letter that takes in an array of words and a single letter and returns an array of all the words containing that particular letter
# Use array and letter as parameters
# Use the select method to construct a new array containing all the elements that match the condition set(letter)
# Use include? which will return true if the given element in the array containg the given character, in our case it is letter.
# Print method using test variables given

def that_letter (array,letter)
   array.select {|el| el.include?(letter)}
end

p that_letter(beverages_array,letter_o)
p that_letter(beverages_array,letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# PSEUDOCDE:
# Input: Hash
# Output: An array with all the hash values at their own index and in alphabetical order.
# PROCCESS:
# Create a method called new_arr that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order
# Use hash as a parameter 
# Use the flatten method, which return a new array that is one-dimensional.
# Specify that we want the values to be flatten
# Use the sort method which will sort the values in alphabetical order
# Print method using test variables given

 def new_arr (hash)
    hash.values.flatten.sort
 end   
p new_arr(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


# PSEUDOCODE:
# Inputs: integers or string (depending on if challenge a or b)
# Output: string similar to("The Indian bike has 2 wheels and is going 0 mph.") if challege a or an integer
# Process:
# Create a class called Bike
# initialize class with model,wheels, and current_speed instance variables
# Set the default number of wheels to 2 and the current_speed to 0
# Create a method called bike_info that returns a sentance with all the date from the bike object. "The #{@model} bike has#{@wheels} wheels and is going #{@current_speed} mph"
# Create a method called pedal_faster, used to increase the speed of the bike by inputted amount
# Create a method called brake, used to decreased the speed of the bike by inputted amount
# Print method using test variables given

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
       @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end    
    def pedal_faster(added_speed)
         @current_speed = current_speed + (added_speed)
    end    
    def brake(decrease_speed)
         @current_speed = current_speed - (decrease_speed)
        if current_speed < 0
            return 0
        else
            return current_speed
        end        
    end  
end
my_bike = Bike.new ('Indian')
p my_bike.bike_info
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)
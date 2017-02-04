class HomeController < ApplicationController
  def index
  end
  
  
  # def styles
  #   binding.pry
  #   response = open('http://api.brewerydb.com/v2/styles?key=4bcd6a2eb064474ae82b23333279b0f3&format=json').read
  #   json = JSON.parse(response)
  #   json["data"].each do |style|
  #     Style.create(name: style["name"], description: style["description"], abvMax: style["abvMax"])
  #   end
  # end
  
end

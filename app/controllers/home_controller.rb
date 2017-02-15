class HomeController < ApplicationController
  def index
  end
  
  
  def description
    @name = params["name"]
    case @name
    when "American Lager"
      @name = "American-Style Lager"
    when "German Helles"
      @name = "Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)"
    when "German Pilsener"
      @name = "German-Style Pilsener"
    when "Czech or Bohemian Pilsener"
      @name = "Bohemian-Style Pilsener"
    when "Amber American Lager"
      @name = "American-Style Amber (Low Calorie) Lager"
    when "Oktoberfest"
      @name = "German-Style Oktoberfest / Wiesen (Meadow)"
    when "German Schwarzbier"
      @name = "German-Style Schwarzbier"
    when "Vienna Lager"
      @name = "Vienna-Style Lager"
    when "Traditional Bock"
      @name = "Traditional German-Style Bock"
    when "Doppelbock"
      @name = "German-Style Doppelbock"
    when "Weizenbock"
      @name = "South German-Style Weizenbock / Weissbock"
    when "Maibock"
      @name = "German-Style Heller Bock/Maibock"
    when "American Brown Ale"
      @name = "American-Style Brown Ale"
    when "English Brown Ale"
      @name = "English-Style Brown Ale"
    when "American Amber Ale"
      @name = "American-Style Amber/Red Ale"
    when "American Pale Ale"
      @name = "American-Style Pale Ale"
    when "Blonde Ale"
      @name = "Belgian-Style Blonde Ale"
    when "English Bitter"
      @name = "Ordinary Bitter"
    when "English Pale Ale"
      @name = "Classic English-Style Pale Ale"
    when "American IPA"
      @name = "American-Style India Pale Ale"
    when "Imperial or Double IPA"
      @name = "Imperial or Double India Pale Ale"
    when "English IPA"
      @name = "English-Style India Pale Ale"
    when "American Imperial Porter"
      @name = "American-Style Imperial Porter"
    when "English Brown Porter"
      @name = "Brown Porter"
    when "Robust Porter"
      @name = "Robust Porter"
    when "American Stout"
      @name = "American-Style Stout"
    when "Irish Dry Stout"
      @name = "Classic Irish-Style Dry Stout"
    when "American Imperial Stout"
      @name = "American-Style Imperial Stout"
    when "Oatmeal Stout"
      @name = "Oatmeal Stout"
    when "Belgian Pale Ale"
      @name = "Belgian-Style Pale Ale"
    when "Beglian Dubbel"
      @name = "Belgian-Style Dubbel"
    when "Belgian Tripel"
      @name = "Belgian-Style Tripel"
    when "Belgian Quadrupel"
      @name = "Belgian-Style Quadrupel"
    when "Belgian Saison"
      @name = "French & Belgian-Style Saison"
    when "Belgian Strong Dark Ale"
      @name = "Belgian-Style Dark Strong Ale"
    when "Belgian Witbier"
      @name = "Belgian-Style White (or Wit) / Belgian-Style Wheat"
    when "Berliner Weisse"
      @name = "Berliner-Style Weisse (Wheat)"
    when "Dunkelweizen"
      @name = "South German-Style Dunkel Weizen / Dunkel Weissbier"
    when "Hefeweizen"
      @name = "South German-Style Hefeweizen / Hefeweissbier"
    when "American Sour"
      @name = "American-Style Sour Ale"
    when "Belgian Fruit Lambic"
      @name = "Belgian-Style Fruit Lambic"
    when "Flanders Red Ale"
      @name = "Belgian-Style Flanders Oud Bruin or Oud Red Ales"
    when "Belgian Gueuze"
      @name = "Belgian-Style Gueuze Lambic"
    end
    
    @description = (Style.where(name: @name).first).description
    
    respond_to do |format|
    # if the response fomat is html, redirect as usual
    format.html { redirect_to root_path }

    # if the response format is javascript, do something else...
    format.js { }
  end
    
    
  end
  
  def styles
    response = open('http://api.brewerydb.com/v2/styles?key=4bcd6a2eb064474ae82b23333279b0f3&format=json').read
    json = JSON.parse(response)
    json["data"].each do |style|
      Style.create(@name: style["@name"], description: style["description"], abvMax: style["abvMax"])
    end
  end
  
end

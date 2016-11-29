class BeersController < ApplicationController

    def create
    end

    def static
    end
    #Static Method for FrontEnd Team

    def index
      @beer = Beer.all
      render json: @beer
    end
    #Displays all beer

    def show
    end
    





end

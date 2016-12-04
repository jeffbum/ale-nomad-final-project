class BrewsController < ApplicationController

      acts_as_mappable

      def static
      end
      #Static Method for FrontEnd Team

      def index
        @brew = Brew.all
        render json: @brew
      end
      #Displays all beer

      def show
        @brew = Brew.find(params[:id])
          render json: @brew
      end



end

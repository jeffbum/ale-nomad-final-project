class BrewsController < ApplicationController

      def create
      end

      def static
      end
      #Static Method for FrontEnd Team

      def index
        @brew = Brew.all
        render json: @brew
      end
      #Displays all beer

      def show
        @brew = Brew.find_by(params[:id])
          render json: @brew
      end



end

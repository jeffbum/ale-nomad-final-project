class BrewsController < ApplicationController
      #Displays all beer
      def index
        @brews = Brew.all.order(:name).page params[:page]
        render json: @brews, meta: pagination_dict(@brews)
      end
      
      def show
        @brew = Brew.find(params[:id])
        render json: @brew
      end

  private
      # pagination for brew.all and beer.all_rolled back usage due to time
        def pagination_dict(object)
          {
            current_page: object.current_page,
            next_page: object.next_page,
            prev_page: object.prev_page,
            total_pages: object.total_pages,
            total_count: object.total_count
          }
        end
end

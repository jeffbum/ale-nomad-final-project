class BrewsController < ApplicationController


      def static
      end
      #Static Method for FrontEnd Team

      def index
        @brews = Brew.all.order(:name).page params[:page]
        render json: @brews, meta: pagination_dict(@brews)
      end
      #Displays all beer


      def pagination_dict(object)
        {
          current_page: object.current_page,
          next_page: object.next_page,
          prev_page: object.prev_page, # use object.previous_page when using will_paginate
          total_pages: object.total_pages,
          total_count: object.total_count
        }
      end

      def show
        @brew = Brew.find(params[:id])
        render json: @brew
      end



end

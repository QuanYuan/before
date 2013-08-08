class MainController < ApplicationController

  before_filter :authenticate_user!, except: [:index, :show]
  def about

  end
  def contact

  end
end

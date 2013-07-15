require 'spec_helper'

describe "Books" do
  describe "Home page" do
    it "should have content Loading" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit root_path
      page.should have_content('Loading')
      page.should have_selector('title', text:'Book')
    end
  end
  describe "About page" do
    it "should have content About us" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit about_path
      page.should have_content('About us')
      page.should have_selector('title', text:'Book')
    end
  end
  describe "Contact page" do
    it "should have content Contact us" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit contact_path
      page.should have_content('Contact us')
      page.should have_selector('title', text:'Book')
    end
  end
end

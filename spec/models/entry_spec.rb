require 'spec_helper'

describe Entry do
  #pending "add some examples to (or delete) #{__FILE__}"
  before { @entry = Entry.new(name: "java", address: "http://www.google.com",tag:"test tag") }

  subject { @entry }

  it { should respond_to(:name) }
  it { should respond_to(:address) }
  it { should respond_to(:tag) }
  it { should be_valid }
  describe "when name is not present" do
    before {@entry.name=""}
    it {should_not be_valid}
  end
  describe "when url is not valid" do
    before {@entry.address="www.google.com"}
    it {should_not be_valid}
  end
  describe "when address format is invalid" do
    it "should be invalid" do
      addresses = %w[www. ww.google.com htt:www.google.com httpwww.google.com]
      addresses.each do |invalid_address|
        @entry.address = invalid_address
        @entry.should_not be_valid
      end
    end
  end
  describe "when address format is valid" do
    it "should be valid" do
      addresses = %w[http://www.google.com https://www.cnn.com]
      addresses.each do |valid_address|
        @entry.address = valid_address
        @entry.should be_valid
      end
    end
  end
  describe "when name is already taken" do
    before do
      entry_with_same_name = @entry.dup
      entry_with_same_name.save
    end

    it { should_not be_valid }
  end
  describe "when name case sensitive is already taken" do
    before do
      entry_with_same_name = @entry.dup
      entry_with_same_name.name = @entry.name.upcase
      entry_with_same_name.save
    end

    it { should_not be_valid }
  end
end
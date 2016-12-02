# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161202224019) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "beer_name"
    t.integer  "beer_abv"
    t.integer  "beer_ibu"
    t.string   "beer_description"
    t.integer  "bid"
    t.string   "beer_style"
    t.integer  "rating_score"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "category_id"
    t.string   "year"
    t.string   "available"
    t.integer  "brew_id"
    t.string   "beer_label_id"
  end

  create_table "brews", force: :cascade do |t|
    t.string   "brewerydb_id"
    t.string   "name"
    t.string   "status"
    t.string   "website"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.decimal  "lat",                precision: 9, scale: 7
    t.decimal  "lng",                precision: 9, scale: 7
    t.string   "hours_of_operation"
    t.string   "phone"
    t.string   "street_address"
    t.string   "postal_code"
    t.string   "established"
    t.string   "images"
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "api_token"
    t.string   "image"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end

require 'rails_helper'

RSpec.describe 'Opinion', type: :system do
  let!(:user) { create(:user) }
  let!(:opinions) { create_list(:opinion, 3, user: user) }

  it '投稿一覧が表示される' do
    visit root_path
    opinions.each do |opinion|
      expect(page).to have_css('.card_title', text: opinion.title)
    end
  end

  it '投稿詳細を表示できる' do
    visit root_path

    page.first(".guest").click
    opinion = opinions.first
    click_on opinion.title

    expect(page).to have_css('.card_title', text: opinion.title)
    expect(page).to have_css('.card_content', text: opinion.content.to_plain_text)
  end
end

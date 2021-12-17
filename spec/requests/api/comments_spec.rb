require 'rails_helper'

RSpec.describe "Api::Comments", type: :request do
  let!(:user) { create(:user) }
  let!(:opinion) { create(:opinion, user: user) }
  let!(:comments) { create_list(:comment, 3, opinion: opinion, user: user) }

  describe "GET /api/comments" do
    it "200 Status" do
      get opinion_comments_path(opinion_id: opinion.id)
      expect(response).to have_http_status(200)

      body = JSON.parse(response.body)
      expect(body.length).to eq 3
      expect(body[0]['content']).to eq comments.first.content
      expect(body[1]['content']).to eq comments.second.content
      expect(body[2]['content']).to eq comments.third.content
    end
  end
end

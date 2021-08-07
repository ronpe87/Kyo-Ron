require 'rails_helper'

RSpec.describe "Opinions", type: :request do
  let!(:user) { create(:user) }
  let!(:opinions) { create_list(:opinion, 3, user: user) }

  describe "GET /opinions" do
    it "200ステータスが帰って来る" do
      get opinions_path
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /opinions" do
    context 'ログインしている場合' do
      before do
        sign_in user
      end

      it "記事が保存されている" do
        opinion_params = attributes_for(:opinion)
        post opinions_path({opinion: opinion_params})
        expect(response).to have_http_status(302)
        expect(Opinion.last.title).to eq(opinion_params[:title])
        expect(Opinion.last.content.body.to_plain_text).to eq(opinion_params[:content])
      end
    end

    context 'ログインしていない場合' do
      it 'ログイン画面に遷移する' do
        opinion_params = attributes_for(:opinion)
        post opinions_path({opinion: opinion_params})
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end

class GameSession < ApplicationRecord
  has_many :player_game_sessions
  has_many :players, through: :player_game_sessions

  accepts_nested_attributes_for :players, reject_if: :all_blank, allow_destroy: true
  has_one :game
  has_one :winner, through: :players
end

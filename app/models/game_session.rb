class GameSession < ApplicationRecord
  has_many :players, through: :player_game_sessions
  has_one :game
end

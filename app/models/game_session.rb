class GameSession < ApplicationRecord
  has_many :players, through: :player_game_sessions
  has_one :game
  has_one :winner, through: :players
end

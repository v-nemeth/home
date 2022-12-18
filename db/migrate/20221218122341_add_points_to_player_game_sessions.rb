class AddPointsToPlayerGameSessions < ActiveRecord::Migration[7.0]
  def change
    add_column :player_game_sessions, :points, :integer
  end
end

class CreateGameSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :game_sessions do |t|
      t.integer :game_id
      t.integer :winner_id

      t.timestamps
    end
  end
end

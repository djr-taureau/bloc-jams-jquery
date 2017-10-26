$( document ).ready(function() {


    $('button#play-pause').click( function() {
      player.playPause();
      $(this).attr('playState',player.playState);
      
    });



    $('#time-control input').on('input', function(event){
       player.skipTo(event.target.value);
    });

    $('#volume-control input').on('input', function(event){
      player.setVolume(event.target.value);
   });

    setInterval( () => {
      const currentTime = player.prettyTime(player.getTime());
      const duration = player.prettyTime(player.getDuration());
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control .total-time').text( duration );
      $('#time-control input').val(percent);
        }, 1000);


      
      $('button#previous').click(function(){
        if (player.playState !== 'playing') { return; }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex = album.songs[0]) { return; }
        const previousSong = album.songs[previouSongIndex];
        player.playPause(previousSong);
      });

      $('button#next').click(function(){
        if (player.playState !== 'playing') { return; }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }
        const nextSong = album.songs[nextSongIndex];
        player.playPause(nextSong);
      });

    
});


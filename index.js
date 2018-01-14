module.exports = {
  Noties: function(notes, referenceNodes, noteView, options={}){
    return {
      render: function(){
        var nts = typeof(notes) == 'function' ? notes() : notes;
        var refnds = typeof(referenceNodes) == 'function' ? referenceNodes() : referenceNodes;
        var vw = typeof(noteView) == 'function' ? noteView() : noteView;

        // Number of notes and reference nodes needs to be the same.
        if (nts.length != refnds.length){
          console.log("Warning! Number of notes is different from the number of reference nodes!");
        }
        var n = Math.min(nts.length, refnds.length);

        var notesHtml = [];
        for (var i=0; i < n; i++){
          var nt = nts[i].getAttribute('data-note');
          notesHtml.push('<p><sup>'+(i+1)+'</sup> ' + nt + '</p>');
          var refnd = refnds[i];
          refnd.innerHTML = '<sup>'+(i+1)+'</sup>';
        }

        if (vw) vw.innerHTML = notesHtml.join('');
      }
    };
  }
};

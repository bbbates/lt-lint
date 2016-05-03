if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28847 = {};return obj28847;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj28849 = {};return obj28849;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj28851 = {};return obj28851;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj28853 = {};return obj28853;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj28855 = {};return obj28855;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"itm","itm",-1640426917,null)))))].join('')));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28857 = {};return obj28857;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__28793 = (cnt + 1);
cnt = G__28793;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__20651__auto__ = self__.length;var x = 0;while(true){
if((x < n__20651__auto__))
{var v_28794 = this$.pop();if(keep_QMARK_.call(null,v_28794))
{this$.unshift(v_28794);
} else
{}
{
var G__28795 = (x + 1);
x = G__28795;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;self__.buf.unbounded_unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{} else
{self__.buf.unshift(itm);
}
return this$__$1;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
self__.buf.unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_28843 = 0;while(true){
var m_28844 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28844 == null))
{} else
{m_28844.call(null);
if((count_28843 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28845 = (count_28843 + 1);
count_28843 = G__28845;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19791__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19791__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28799 = (function (val,box,meta28800){
this.val = val;
this.box = box;
this.meta28800 = meta28800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28799.cljs$lang$type = true;
cljs.core.async.impl.channels.t28799.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28799";
cljs.core.async.impl.channels.t28799.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28799");
});
cljs.core.async.impl.channels.t28799.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28801){var self__ = this;
var _28801__$1 = this;return self__.meta28800;
});
cljs.core.async.impl.channels.t28799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28801,meta28800__$1){var self__ = this;
var _28801__$1 = this;return (new cljs.core.async.impl.channels.t28799(self__.val,self__.box,meta28800__$1));
});
cljs.core.async.impl.channels.__GT_t28799 = (function __GT_t28799(val__$1,box__$1,meta28800){return (new cljs.core.async.impl.channels.t28799(val__$1,box__$1,meta28800));
});
}
return (new cljs.core.async.impl.channels.t28799(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20373__auto__,writer__20374__auto__,opts__20375__auto__){return cljs.core._write.call(null,writer__20374__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj28803 = {};return obj28803;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (self__.puts.length === 0);
} else
{return and__19791__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_28818 = self__.takes.pop();if((taker_28818 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28818))
{var take_cb_28819 = cljs.core.async.impl.protocols.commit.call(null,taker_28818);var val_28820 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28819,val_28820,taker_28818,this$__$1){
return (function (){return take_cb_28819.call(null,val_28820);
});})(take_cb_28819,val_28820,taker_28818,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_28821 = self__.puts.pop();if((putter_28821 == null))
{} else
{var put_handler_28822 = putter_28821.handler;var val_28823 = putter_28821.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28822))
{var put_cb_28824 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28822);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28824,put_handler_28822,val_28823,putter_28821,_,retval,this$__$1){
return (function (){return put_cb_28824.call(null,true);
});})(put_cb_28824,put_handler_28822,val_28823,putter_28821,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28823)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19791__auto__;
}
})()))
{var has_val = (function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19791__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_28825 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28825))
{var take_cb_28826 = cljs.core.async.impl.protocols.commit.call(null,taker_28825);var val_28827__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28826,val_28827__$1,taker_28825,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28826.call(null,val_28827__$1);
});})(take_cb_28826,val_28827__$1,taker_28825,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_28828 = self__.puts.pop();if((putter_28828 == null))
{} else
{var put_handler_28829 = putter_28828.handler;var val_28830 = putter_28828.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28829))
{var put_cb_28831 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28829);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28831,put_handler_28829,val_28830,putter_28828,this$__$1){
return (function (){return put_cb_28831.call(null,true);
});})(put_cb_28831,put_handler_28829,val_28830,putter_28828,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19803__auto__ = exh;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__28832 = null;
var G__28832__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28806){var t = e28806;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28832__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28807){var t = e28807;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28832 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28832__1.call(this,buf__$1);
case 2:
return G__28832__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28832;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__28878 = (level + 1);
level = G__28878;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28879 = 0;while(true){
if((i_28879 < arr.length))
{(arr[i_28879] = null);
{
var G__28880 = (i_28879 + 1);
i_28879 = G__28880;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__28881 = x_SINGLEQUOTE_;
x__$1 = G__28881;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__28882 = x__$1;
var G__28883 = k;
var G__28884 = (level - 1);
var G__28885 = update;
x = G__28882;
k = G__28883;
level = G__28884;
update = G__28885;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_28886 = (self__.level + 1);while(true){
if((i_28886 <= (new_level + 1)))
{(update[i_28886] = self__.header);
{
var G__28887 = (i_28886 + 1);
i_28886 = G__28887;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_28888 = 0;while(true){
if((i_28888 <= self__.level))
{var links_28889 = (update[i_28888]).forward;if(((links_28889[i_28888]) === x__$1))
{(links_28889[i_28888] = (x__$1.forward[i_28888]));
{
var G__28890 = (i_28888 + 1);
i_28888 = G__28890;
continue;
}
} else
{{
var G__28891 = (i_28888 + 1);
i_28888 = G__28891;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__28892 = x_SINGLEQUOTE_;
x__$1 = G__28892;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28893 = nx;
var G__28894 = (level__$1 - 1);
x = G__28893;
level__$1 = G__28894;
continue;
}
} else
{{
var G__28895 = x;
var G__28896 = (level__$1 - 1);
x = G__28895;
level__$1 = G__28896;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__28897 = x_SINGLEQUOTE_;
x__$1 = G__28897;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__28898 = nx;
var G__28899 = (level__$1 - 1);
x = G__28898;
level__$1 = G__28899;
continue;
}
} else
{{
var G__28900 = x;
var G__28901 = (level__$1 - 1);
x = G__28900;
level__$1 = G__28901;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19803__auto__ = (cljs.core.truth_((function (){var and__19791__auto__ = me;if(cljs.core.truth_(and__19791__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19791__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19803__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19803__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28723 = (function (f,fn_handler,meta28724){
this.f = f;
this.fn_handler = fn_handler;
this.meta28724 = meta28724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28723.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28723.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28723";
cljs.core.async.impl.ioc_helpers.t28723.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28723");
});
cljs.core.async.impl.ioc_helpers.t28723.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28725){var self__ = this;
var _28725__$1 = this;return self__.meta28724;
});
cljs.core.async.impl.ioc_helpers.t28723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28725,meta28724__$1){var self__ = this;
var _28725__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28723(self__.f,self__.fn_handler,meta28724__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28723 = (function __GT_t28723(f__$1,fn_handler__$1,meta28724){return (new cljs.core.async.impl.ioc_helpers.t28723(f__$1,fn_handler__$1,meta28724));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28723(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28727){if((e28727 instanceof Object))
{var ex = e28727;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28727;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28730_28773 = state;(statearr_28730_28773[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28730_28773[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28731_28774 = state;(statearr_28731_28774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28731_28774[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28734_28775 = state;(statearr_28734_28775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28734_28775[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28735_28776 = state;(statearr_28735_28776[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28735_28776[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28736){var map__28741 = p__28736;var map__28741__$1 = ((cljs.core.seq_QMARK_.call(null,map__28741))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);var opts = map__28741__$1;var statearr_28742_28777 = state;(statearr_28742_28777[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28741,map__28741__$1,opts){
return (function (val){var statearr_28743_28778 = state;(statearr_28743_28778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28741,map__28741__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28744_28779 = state;(statearr_28744_28779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28736 = null;if (arguments.length > 3) {
  p__28736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28736);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28780){
var state = cljs.core.first(arglist__28780);
arglist__28780 = cljs.core.next(arglist__28780);
var cont_block = cljs.core.first(arglist__28780);
arglist__28780 = cljs.core.next(arglist__28780);
var ports = cljs.core.first(arglist__28780);
var p__28736 = cljs.core.rest(arglist__28780);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28736);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28746,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28746,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28746,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28746,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28746,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28746,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28746,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28745){var self__ = this;
var this__20396__auto____$1 = this;var pred__28748 = cljs.core.keyword_identical_QMARK_;var expr__28749 = k__20397__auto__;if(cljs.core.truth_(pred__28748.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28749)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28745,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28748.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28749)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28745,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28748.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28749)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28745,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28748.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28749)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28745,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28748.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28749)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28745,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28745),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28745){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28745,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28747){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28747),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28747),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28747),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28747),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28747),null,cljs.core.dissoc.call(null,G__28747,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28752 = state;(statearr_28752[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28752;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19791__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = catch_block;if(cljs.core.truth_(and__19791__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28758 = state;(statearr_28758[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28758[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28758[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28758;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28759_28781 = state;(statearr_28759_28781[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28782 = state;
state = G__28782;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19791__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28760 = state;(statearr_28760[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28760[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28760;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28761 = state;(statearr_28761[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28761[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28761;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28762 = state;(statearr_28762[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28762[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28762;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("No matching clause"));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25641 = (function (f,fn_handler,meta25642){
this.f = f;
this.fn_handler = fn_handler;
this.meta25642 = meta25642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25641.cljs$lang$type = true;
cljs.core.async.t25641.cljs$lang$ctorStr = "cljs.core.async/t25641";
cljs.core.async.t25641.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25641");
});
cljs.core.async.t25641.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25643){var self__ = this;
var _25643__$1 = this;return self__.meta25642;
});
cljs.core.async.t25641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25643,meta25642__$1){var self__ = this;
var _25643__$1 = this;return (new cljs.core.async.t25641(self__.f,self__.fn_handler,meta25642__$1));
});
cljs.core.async.__GT_t25641 = (function __GT_t25641(f__$1,fn_handler__$1,meta25642){return (new cljs.core.async.t25641(f__$1,fn_handler__$1,meta25642));
});
}
return (new cljs.core.async.t25641(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25645 = buff;if(G__25645)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25645.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25645);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28348 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28348);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28348,ret){
return (function (){return fn1.call(null,val_28348);
});})(val_28348,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28349 = n;var x_28350 = 0;while(true){
if((x_28350 < n__20651__auto___28349))
{(a[x_28350] = 0);
{
var G__28351 = (x_28350 + 1);
x_28350 = G__28351;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28352 = (i + 1);
i = G__28352;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25649 = (function (flag,alt_flag,meta25650){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25650 = meta25650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25649.cljs$lang$type = true;
cljs.core.async.t25649.cljs$lang$ctorStr = "cljs.core.async/t25649";
cljs.core.async.t25649.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25649");
});})(flag))
;
cljs.core.async.t25649.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25651){var self__ = this;
var _25651__$1 = this;return self__.meta25650;
});})(flag))
;
cljs.core.async.t25649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25651,meta25650__$1){var self__ = this;
var _25651__$1 = this;return (new cljs.core.async.t25649(self__.flag,self__.alt_flag,meta25650__$1));
});})(flag))
;
cljs.core.async.__GT_t25649 = ((function (flag){
return (function __GT_t25649(flag__$1,alt_flag__$1,meta25650){return (new cljs.core.async.t25649(flag__$1,alt_flag__$1,meta25650));
});})(flag))
;
}
return (new cljs.core.async.t25649(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25655 = (function (cb,flag,alt_handler,meta25656){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25656 = meta25656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25655.cljs$lang$type = true;
cljs.core.async.t25655.cljs$lang$ctorStr = "cljs.core.async/t25655";
cljs.core.async.t25655.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25655");
});
cljs.core.async.t25655.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25657){var self__ = this;
var _25657__$1 = this;return self__.meta25656;
});
cljs.core.async.t25655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25657,meta25656__$1){var self__ = this;
var _25657__$1 = this;return (new cljs.core.async.t25655(self__.cb,self__.flag,self__.alt_handler,meta25656__$1));
});
cljs.core.async.__GT_t25655 = (function __GT_t25655(cb__$1,flag__$1,alt_handler__$1,meta25656){return (new cljs.core.async.t25655(cb__$1,flag__$1,alt_handler__$1,meta25656));
});
}
return (new cljs.core.async.t25655(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25658_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25658_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25659_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25659_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19803__auto__ = wport;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28353 = (i + 1);
i = G__28353;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19803__auto__ = ret;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19791__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25660){var map__25662 = p__25660;var map__25662__$1 = ((cljs.core.seq_QMARK_.call(null,map__25662))?cljs.core.apply.call(null,cljs.core.hash_map,map__25662):map__25662);var opts = map__25662__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25660 = null;if (arguments.length > 1) {
  p__25660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25660);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28354){
var ports = cljs.core.first(arglist__28354);
var p__25660 = cljs.core.rest(arglist__28354);
return alts_BANG___delegate(ports,p__25660);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__22463__auto___28355 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28355){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28355){
return (function (state_25733){var state_val_25734 = (state_25733[1]);if((state_val_25734 === 1))
{var state_25733__$1 = state_25733;var statearr_25735_28356 = state_25733__$1;(statearr_25735_28356[2] = null);
(statearr_25735_28356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 2))
{var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25733__$1,4,from);
} else
{if((state_val_25734 === 3))
{var inst_25731 = (state_25733[2]);var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25733__$1,inst_25731);
} else
{if((state_val_25734 === 4))
{var inst_25712 = (state_25733[7]);var inst_25712__$1 = (state_25733[2]);var inst_25713 = (inst_25712__$1 == null);var state_25733__$1 = (function (){var statearr_25736 = state_25733;(statearr_25736[7] = inst_25712__$1);
return statearr_25736;
})();if(cljs.core.truth_(inst_25713))
{var statearr_25737_28357 = state_25733__$1;(statearr_25737_28357[1] = 5);
} else
{var statearr_25738_28358 = state_25733__$1;(statearr_25738_28358[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 5))
{var state_25733__$1 = state_25733;if(cljs.core.truth_(close_QMARK_))
{var statearr_25739_28359 = state_25733__$1;(statearr_25739_28359[1] = 8);
} else
{var statearr_25740_28360 = state_25733__$1;(statearr_25740_28360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 6))
{var inst_25712 = (state_25733[7]);var state_25733__$1 = state_25733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25733__$1,11,to,inst_25712);
} else
{if((state_val_25734 === 7))
{var inst_25729 = (state_25733[2]);var state_25733__$1 = state_25733;var statearr_25741_28361 = state_25733__$1;(statearr_25741_28361[2] = inst_25729);
(statearr_25741_28361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 8))
{var inst_25716 = cljs.core.async.close_BANG_.call(null,to);var state_25733__$1 = state_25733;var statearr_25742_28362 = state_25733__$1;(statearr_25742_28362[2] = inst_25716);
(statearr_25742_28362[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 9))
{var state_25733__$1 = state_25733;var statearr_25743_28363 = state_25733__$1;(statearr_25743_28363[2] = null);
(statearr_25743_28363[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 10))
{var inst_25719 = (state_25733[2]);var state_25733__$1 = state_25733;var statearr_25744_28364 = state_25733__$1;(statearr_25744_28364[2] = inst_25719);
(statearr_25744_28364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 11))
{var inst_25722 = (state_25733[2]);var state_25733__$1 = state_25733;if(cljs.core.truth_(inst_25722))
{var statearr_25745_28365 = state_25733__$1;(statearr_25745_28365[1] = 12);
} else
{var statearr_25746_28366 = state_25733__$1;(statearr_25746_28366[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 12))
{var state_25733__$1 = state_25733;var statearr_25747_28367 = state_25733__$1;(statearr_25747_28367[2] = null);
(statearr_25747_28367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 13))
{var state_25733__$1 = state_25733;var statearr_25748_28368 = state_25733__$1;(statearr_25748_28368[2] = null);
(statearr_25748_28368[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25734 === 14))
{var inst_25727 = (state_25733[2]);var state_25733__$1 = state_25733;var statearr_25749_28369 = state_25733__$1;(statearr_25749_28369[2] = inst_25727);
(statearr_25749_28369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28355))
;return ((function (switch__22387__auto__,c__22463__auto___28355){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25753 = [null,null,null,null,null,null,null,null];(statearr_25753[0] = state_machine__22388__auto__);
(statearr_25753[1] = 1);
return statearr_25753;
});
var state_machine__22388__auto____1 = (function (state_25733){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25733);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25754){if((e25754 instanceof Object))
{var ex__22391__auto__ = e25754;var statearr_25755_28370 = state_25733;(statearr_25755_28370[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28371 = state_25733;
state_25733 = G__28371;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25733){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28355))
})();var state__22465__auto__ = (function (){var statearr_25756 = f__22464__auto__.call(null);(statearr_25756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28355);
return statearr_25756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28355))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__25939){var vec__25940 = p__25939;var v = cljs.core.nth.call(null,vec__25940,0,null);var p = cljs.core.nth.call(null,vec__25940,1,null);var job = vec__25940;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22463__auto___28372 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results){
return (function (state_25945){var state_val_25946 = (state_25945[1]);if((state_val_25946 === 2))
{var inst_25942 = (state_25945[2]);var inst_25943 = cljs.core.async.close_BANG_.call(null,res);var state_25945__$1 = (function (){var statearr_25947 = state_25945;(statearr_25947[7] = inst_25942);
return statearr_25947;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25945__$1,inst_25943);
} else
{if((state_val_25946 === 1))
{var state_25945__$1 = state_25945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,2,res,v);
} else
{return null;
}
}
});})(c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results))
;return ((function (switch__22387__auto__,c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25951 = [null,null,null,null,null,null,null,null];(statearr_25951[0] = state_machine__22388__auto__);
(statearr_25951[1] = 1);
return statearr_25951;
});
var state_machine__22388__auto____1 = (function (state_25945){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25945);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object))
{var ex__22391__auto__ = e25952;var statearr_25953_28373 = state_25945;(statearr_25953_28373[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28374 = state_25945;
state_25945 = G__28374;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25945){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results))
})();var state__22465__auto__ = (function (){var statearr_25954 = f__22464__auto__.call(null);(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28372);
return statearr_25954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28372,res,vec__25940,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25955){var vec__25956 = p__25955;var v = cljs.core.nth.call(null,vec__25956,0,null);var p = cljs.core.nth.call(null,vec__25956,1,null);var job = vec__25956;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28375 = n;var __28376 = 0;while(true){
if((__28376 < n__20651__auto___28375))
{var G__25957_28377 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__25957_28377))
{var c__22463__auto___28378 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28376,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28376,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function (state_25970){var state_val_25971 = (state_25970[1]);if((state_val_25971 === 7))
{var inst_25966 = (state_25970[2]);var state_25970__$1 = state_25970;var statearr_25972_28379 = state_25970__$1;(statearr_25972_28379[2] = inst_25966);
(statearr_25972_28379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25971 === 6))
{var state_25970__$1 = state_25970;var statearr_25973_28380 = state_25970__$1;(statearr_25973_28380[2] = null);
(statearr_25973_28380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25971 === 5))
{var state_25970__$1 = state_25970;var statearr_25974_28381 = state_25970__$1;(statearr_25974_28381[2] = null);
(statearr_25974_28381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25971 === 4))
{var inst_25960 = (state_25970[2]);var inst_25961 = async.call(null,inst_25960);var state_25970__$1 = state_25970;if(cljs.core.truth_(inst_25961))
{var statearr_25975_28382 = state_25970__$1;(statearr_25975_28382[1] = 5);
} else
{var statearr_25976_28383 = state_25970__$1;(statearr_25976_28383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25971 === 3))
{var inst_25968 = (state_25970[2]);var state_25970__$1 = state_25970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25970__$1,inst_25968);
} else
{if((state_val_25971 === 2))
{var state_25970__$1 = state_25970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25970__$1,4,jobs);
} else
{if((state_val_25971 === 1))
{var state_25970__$1 = state_25970;var statearr_25977_28384 = state_25970__$1;(statearr_25977_28384[2] = null);
(statearr_25977_28384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28376,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
;return ((function (__28376,switch__22387__auto__,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25981 = [null,null,null,null,null,null,null];(statearr_25981[0] = state_machine__22388__auto__);
(statearr_25981[1] = 1);
return statearr_25981;
});
var state_machine__22388__auto____1 = (function (state_25970){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25970);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25982){if((e25982 instanceof Object))
{var ex__22391__auto__ = e25982;var statearr_25983_28385 = state_25970;(statearr_25983_28385[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28386 = state_25970;
state_25970 = G__28386;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25970){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28376,switch__22387__auto__,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_25984 = f__22464__auto__.call(null);(statearr_25984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28378);
return statearr_25984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28376,c__22463__auto___28378,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__25957_28377))
{var c__22463__auto___28387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28376,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28376,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function (state_25997){var state_val_25998 = (state_25997[1]);if((state_val_25998 === 7))
{var inst_25993 = (state_25997[2]);var state_25997__$1 = state_25997;var statearr_25999_28388 = state_25997__$1;(statearr_25999_28388[2] = inst_25993);
(statearr_25999_28388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25998 === 6))
{var state_25997__$1 = state_25997;var statearr_26000_28389 = state_25997__$1;(statearr_26000_28389[2] = null);
(statearr_26000_28389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25998 === 5))
{var state_25997__$1 = state_25997;var statearr_26001_28390 = state_25997__$1;(statearr_26001_28390[2] = null);
(statearr_26001_28390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25998 === 4))
{var inst_25987 = (state_25997[2]);var inst_25988 = process.call(null,inst_25987);var state_25997__$1 = state_25997;if(cljs.core.truth_(inst_25988))
{var statearr_26002_28391 = state_25997__$1;(statearr_26002_28391[1] = 5);
} else
{var statearr_26003_28392 = state_25997__$1;(statearr_26003_28392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25998 === 3))
{var inst_25995 = (state_25997[2]);var state_25997__$1 = state_25997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25997__$1,inst_25995);
} else
{if((state_val_25998 === 2))
{var state_25997__$1 = state_25997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25997__$1,4,jobs);
} else
{if((state_val_25998 === 1))
{var state_25997__$1 = state_25997;var statearr_26004_28393 = state_25997__$1;(statearr_26004_28393[2] = null);
(statearr_26004_28393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28376,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
;return ((function (__28376,switch__22387__auto__,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26008 = [null,null,null,null,null,null,null];(statearr_26008[0] = state_machine__22388__auto__);
(statearr_26008[1] = 1);
return statearr_26008;
});
var state_machine__22388__auto____1 = (function (state_25997){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25997);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object))
{var ex__22391__auto__ = e26009;var statearr_26010_28394 = state_25997;(statearr_26010_28394[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28395 = state_25997;
state_25997 = G__28395;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25997){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28376,switch__22387__auto__,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26011 = f__22464__auto__.call(null);(statearr_26011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28387);
return statearr_26011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28376,c__22463__auto___28387,G__25957_28377,n__20651__auto___28375,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28396 = (__28376 + 1);
__28376 = G__28396;
continue;
}
} else
{}
break;
}
var c__22463__auto___28397 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28397,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28397,jobs,results,process,async){
return (function (state_26032){var state_val_26033 = (state_26032[1]);if((state_val_26033 === 9))
{var inst_26025 = (state_26032[2]);var state_26032__$1 = (function (){var statearr_26034 = state_26032;(statearr_26034[7] = inst_26025);
return statearr_26034;
})();var statearr_26035_28398 = state_26032__$1;(statearr_26035_28398[2] = null);
(statearr_26035_28398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26033 === 8))
{var inst_26019 = (state_26032[8]);var inst_26023 = (state_26032[2]);var state_26032__$1 = (function (){var statearr_26036 = state_26032;(statearr_26036[9] = inst_26023);
return statearr_26036;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26032__$1,9,results,inst_26019);
} else
{if((state_val_26033 === 7))
{var inst_26028 = (state_26032[2]);var state_26032__$1 = state_26032;var statearr_26037_28399 = state_26032__$1;(statearr_26037_28399[2] = inst_26028);
(statearr_26037_28399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26033 === 6))
{var inst_26019 = (state_26032[8]);var inst_26014 = (state_26032[10]);var inst_26019__$1 = cljs.core.async.chan.call(null,1);var inst_26020 = [inst_26014,inst_26019__$1];var inst_26021 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26020,null));var state_26032__$1 = (function (){var statearr_26038 = state_26032;(statearr_26038[8] = inst_26019__$1);
return statearr_26038;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26032__$1,8,jobs,inst_26021);
} else
{if((state_val_26033 === 5))
{var inst_26017 = cljs.core.async.close_BANG_.call(null,jobs);var state_26032__$1 = state_26032;var statearr_26039_28400 = state_26032__$1;(statearr_26039_28400[2] = inst_26017);
(statearr_26039_28400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26033 === 4))
{var inst_26014 = (state_26032[10]);var inst_26014__$1 = (state_26032[2]);var inst_26015 = (inst_26014__$1 == null);var state_26032__$1 = (function (){var statearr_26040 = state_26032;(statearr_26040[10] = inst_26014__$1);
return statearr_26040;
})();if(cljs.core.truth_(inst_26015))
{var statearr_26041_28401 = state_26032__$1;(statearr_26041_28401[1] = 5);
} else
{var statearr_26042_28402 = state_26032__$1;(statearr_26042_28402[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26033 === 3))
{var inst_26030 = (state_26032[2]);var state_26032__$1 = state_26032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26032__$1,inst_26030);
} else
{if((state_val_26033 === 2))
{var state_26032__$1 = state_26032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26032__$1,4,from);
} else
{if((state_val_26033 === 1))
{var state_26032__$1 = state_26032;var statearr_26043_28403 = state_26032__$1;(statearr_26043_28403[2] = null);
(statearr_26043_28403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28397,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto___28397,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26047 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26047[0] = state_machine__22388__auto__);
(statearr_26047[1] = 1);
return statearr_26047;
});
var state_machine__22388__auto____1 = (function (state_26032){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26032);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26048){if((e26048 instanceof Object))
{var ex__22391__auto__ = e26048;var statearr_26049_28404 = state_26032;(statearr_26049_28404[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28405 = state_26032;
state_26032 = G__28405;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26032){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28397,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26050 = f__22464__auto__.call(null);(statearr_26050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28397);
return statearr_26050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28397,jobs,results,process,async))
);
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,jobs,results,process,async){
return (function (state_26088){var state_val_26089 = (state_26088[1]);if((state_val_26089 === 1))
{var state_26088__$1 = state_26088;var statearr_26090_28406 = state_26088__$1;(statearr_26090_28406[2] = null);
(statearr_26090_28406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 2))
{var state_26088__$1 = state_26088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,4,results);
} else
{if((state_val_26089 === 3))
{var inst_26086 = (state_26088[2]);var state_26088__$1 = state_26088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26088__$1,inst_26086);
} else
{if((state_val_26089 === 4))
{var inst_26053 = (state_26088[7]);var inst_26053__$1 = (state_26088[2]);var inst_26054 = (inst_26053__$1 == null);var state_26088__$1 = (function (){var statearr_26091 = state_26088;(statearr_26091[7] = inst_26053__$1);
return statearr_26091;
})();if(cljs.core.truth_(inst_26054))
{var statearr_26092_28407 = state_26088__$1;(statearr_26092_28407[1] = 5);
} else
{var statearr_26093_28408 = state_26088__$1;(statearr_26093_28408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 5))
{var state_26088__$1 = state_26088;if(cljs.core.truth_(close_QMARK_))
{var statearr_26094_28409 = state_26088__$1;(statearr_26094_28409[1] = 8);
} else
{var statearr_26095_28410 = state_26088__$1;(statearr_26095_28410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 6))
{var inst_26053 = (state_26088[7]);var state_26088__$1 = state_26088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,11,inst_26053);
} else
{if((state_val_26089 === 7))
{var inst_26084 = (state_26088[2]);var state_26088__$1 = state_26088;var statearr_26096_28411 = state_26088__$1;(statearr_26096_28411[2] = inst_26084);
(statearr_26096_28411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 8))
{var inst_26057 = cljs.core.async.close_BANG_.call(null,to);var state_26088__$1 = state_26088;var statearr_26097_28412 = state_26088__$1;(statearr_26097_28412[2] = inst_26057);
(statearr_26097_28412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 9))
{var state_26088__$1 = state_26088;var statearr_26098_28413 = state_26088__$1;(statearr_26098_28413[2] = null);
(statearr_26098_28413[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 10))
{var inst_26060 = (state_26088[2]);var state_26088__$1 = state_26088;var statearr_26099_28414 = state_26088__$1;(statearr_26099_28414[2] = inst_26060);
(statearr_26099_28414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 11))
{var inst_26063 = (state_26088[2]);var state_26088__$1 = (function (){var statearr_26100 = state_26088;(statearr_26100[8] = inst_26063);
return statearr_26100;
})();var statearr_26101_28415 = state_26088__$1;(statearr_26101_28415[2] = null);
(statearr_26101_28415[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 12))
{var inst_26063 = (state_26088[8]);var state_26088__$1 = state_26088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,14,inst_26063);
} else
{if((state_val_26089 === 13))
{var inst_26081 = (state_26088[2]);var state_26088__$1 = (function (){var statearr_26102 = state_26088;(statearr_26102[9] = inst_26081);
return statearr_26102;
})();var statearr_26103_28416 = state_26088__$1;(statearr_26103_28416[2] = null);
(statearr_26103_28416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 14))
{var inst_26068 = (state_26088[10]);var inst_26066 = (state_26088[11]);var inst_26066__$1 = (state_26088[2]);var inst_26067 = (inst_26066__$1 == null);var inst_26068__$1 = cljs.core.not.call(null,inst_26067);var state_26088__$1 = (function (){var statearr_26104 = state_26088;(statearr_26104[10] = inst_26068__$1);
(statearr_26104[11] = inst_26066__$1);
return statearr_26104;
})();if(inst_26068__$1)
{var statearr_26105_28417 = state_26088__$1;(statearr_26105_28417[1] = 15);
} else
{var statearr_26106_28418 = state_26088__$1;(statearr_26106_28418[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 15))
{var inst_26066 = (state_26088[11]);var state_26088__$1 = state_26088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26088__$1,18,to,inst_26066);
} else
{if((state_val_26089 === 16))
{var inst_26068 = (state_26088[10]);var state_26088__$1 = state_26088;var statearr_26107_28419 = state_26088__$1;(statearr_26107_28419[2] = inst_26068);
(statearr_26107_28419[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 17))
{var inst_26074 = (state_26088[2]);var state_26088__$1 = state_26088;if(cljs.core.truth_(inst_26074))
{var statearr_26108_28420 = state_26088__$1;(statearr_26108_28420[1] = 19);
} else
{var statearr_26109_28421 = state_26088__$1;(statearr_26109_28421[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 18))
{var inst_26071 = (state_26088[2]);var state_26088__$1 = state_26088;var statearr_26110_28422 = state_26088__$1;(statearr_26110_28422[2] = inst_26071);
(statearr_26110_28422[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 19))
{var state_26088__$1 = state_26088;var statearr_26111_28423 = state_26088__$1;(statearr_26111_28423[2] = null);
(statearr_26111_28423[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 20))
{var state_26088__$1 = state_26088;var statearr_26112_28424 = state_26088__$1;(statearr_26112_28424[2] = null);
(statearr_26112_28424[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26089 === 21))
{var inst_26079 = (state_26088[2]);var state_26088__$1 = state_26088;var statearr_26113_28425 = state_26088__$1;(statearr_26113_28425[2] = inst_26079);
(statearr_26113_28425[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto__,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26117 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26117[0] = state_machine__22388__auto__);
(statearr_26117[1] = 1);
return statearr_26117;
});
var state_machine__22388__auto____1 = (function (state_26088){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26088);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26118){if((e26118 instanceof Object))
{var ex__22391__auto__ = e26118;var statearr_26119_28426 = state_26088;(statearr_26119_28426[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28427 = state_26088;
state_26088 = G__28427;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26088){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26120 = f__22464__auto__.call(null);(statearr_26120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,jobs,results,process,async))
);
return c__22463__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22463__auto___28428 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28428,tc,fc){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28428,tc,fc){
return (function (state_26196){var state_val_26197 = (state_26196[1]);if((state_val_26197 === 1))
{var state_26196__$1 = state_26196;var statearr_26198_28429 = state_26196__$1;(statearr_26198_28429[2] = null);
(statearr_26198_28429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 2))
{var state_26196__$1 = state_26196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26196__$1,4,ch);
} else
{if((state_val_26197 === 3))
{var inst_26194 = (state_26196[2]);var state_26196__$1 = state_26196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26196__$1,inst_26194);
} else
{if((state_val_26197 === 4))
{var inst_26173 = (state_26196[7]);var inst_26173__$1 = (state_26196[2]);var inst_26174 = (inst_26173__$1 == null);var state_26196__$1 = (function (){var statearr_26199 = state_26196;(statearr_26199[7] = inst_26173__$1);
return statearr_26199;
})();if(cljs.core.truth_(inst_26174))
{var statearr_26200_28430 = state_26196__$1;(statearr_26200_28430[1] = 5);
} else
{var statearr_26201_28431 = state_26196__$1;(statearr_26201_28431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 5))
{var inst_26176 = cljs.core.async.close_BANG_.call(null,tc);var inst_26177 = cljs.core.async.close_BANG_.call(null,fc);var state_26196__$1 = (function (){var statearr_26202 = state_26196;(statearr_26202[8] = inst_26176);
return statearr_26202;
})();var statearr_26203_28432 = state_26196__$1;(statearr_26203_28432[2] = inst_26177);
(statearr_26203_28432[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 6))
{var inst_26173 = (state_26196[7]);var inst_26179 = p.call(null,inst_26173);var state_26196__$1 = state_26196;if(cljs.core.truth_(inst_26179))
{var statearr_26204_28433 = state_26196__$1;(statearr_26204_28433[1] = 9);
} else
{var statearr_26205_28434 = state_26196__$1;(statearr_26205_28434[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 7))
{var inst_26192 = (state_26196[2]);var state_26196__$1 = state_26196;var statearr_26206_28435 = state_26196__$1;(statearr_26206_28435[2] = inst_26192);
(statearr_26206_28435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 8))
{var inst_26185 = (state_26196[2]);var state_26196__$1 = state_26196;if(cljs.core.truth_(inst_26185))
{var statearr_26207_28436 = state_26196__$1;(statearr_26207_28436[1] = 12);
} else
{var statearr_26208_28437 = state_26196__$1;(statearr_26208_28437[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 9))
{var state_26196__$1 = state_26196;var statearr_26209_28438 = state_26196__$1;(statearr_26209_28438[2] = tc);
(statearr_26209_28438[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 10))
{var state_26196__$1 = state_26196;var statearr_26210_28439 = state_26196__$1;(statearr_26210_28439[2] = fc);
(statearr_26210_28439[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 11))
{var inst_26173 = (state_26196[7]);var inst_26183 = (state_26196[2]);var state_26196__$1 = state_26196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26196__$1,8,inst_26183,inst_26173);
} else
{if((state_val_26197 === 12))
{var state_26196__$1 = state_26196;var statearr_26211_28440 = state_26196__$1;(statearr_26211_28440[2] = null);
(statearr_26211_28440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 13))
{var state_26196__$1 = state_26196;var statearr_26212_28441 = state_26196__$1;(statearr_26212_28441[2] = null);
(statearr_26212_28441[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26197 === 14))
{var inst_26190 = (state_26196[2]);var state_26196__$1 = state_26196;var statearr_26213_28442 = state_26196__$1;(statearr_26213_28442[2] = inst_26190);
(statearr_26213_28442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28428,tc,fc))
;return ((function (switch__22387__auto__,c__22463__auto___28428,tc,fc){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26217 = [null,null,null,null,null,null,null,null,null];(statearr_26217[0] = state_machine__22388__auto__);
(statearr_26217[1] = 1);
return statearr_26217;
});
var state_machine__22388__auto____1 = (function (state_26196){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26196);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26218){if((e26218 instanceof Object))
{var ex__22391__auto__ = e26218;var statearr_26219_28443 = state_26196;(statearr_26219_28443[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28444 = state_26196;
state_26196 = G__28444;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26196){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28428,tc,fc))
})();var state__22465__auto__ = (function (){var statearr_26220 = f__22464__auto__.call(null);(statearr_26220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28428);
return statearr_26220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28428,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26267){var state_val_26268 = (state_26267[1]);if((state_val_26268 === 7))
{var inst_26263 = (state_26267[2]);var state_26267__$1 = state_26267;var statearr_26269_28445 = state_26267__$1;(statearr_26269_28445[2] = inst_26263);
(statearr_26269_28445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26268 === 6))
{var inst_26256 = (state_26267[7]);var inst_26253 = (state_26267[8]);var inst_26260 = f.call(null,inst_26253,inst_26256);var inst_26253__$1 = inst_26260;var state_26267__$1 = (function (){var statearr_26270 = state_26267;(statearr_26270[8] = inst_26253__$1);
return statearr_26270;
})();var statearr_26271_28446 = state_26267__$1;(statearr_26271_28446[2] = null);
(statearr_26271_28446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26268 === 5))
{var inst_26253 = (state_26267[8]);var state_26267__$1 = state_26267;var statearr_26272_28447 = state_26267__$1;(statearr_26272_28447[2] = inst_26253);
(statearr_26272_28447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26268 === 4))
{var inst_26256 = (state_26267[7]);var inst_26256__$1 = (state_26267[2]);var inst_26257 = (inst_26256__$1 == null);var state_26267__$1 = (function (){var statearr_26273 = state_26267;(statearr_26273[7] = inst_26256__$1);
return statearr_26273;
})();if(cljs.core.truth_(inst_26257))
{var statearr_26274_28448 = state_26267__$1;(statearr_26274_28448[1] = 5);
} else
{var statearr_26275_28449 = state_26267__$1;(statearr_26275_28449[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26268 === 3))
{var inst_26265 = (state_26267[2]);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26267__$1,inst_26265);
} else
{if((state_val_26268 === 2))
{var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26267__$1,4,ch);
} else
{if((state_val_26268 === 1))
{var inst_26253 = init;var state_26267__$1 = (function (){var statearr_26276 = state_26267;(statearr_26276[8] = inst_26253);
return statearr_26276;
})();var statearr_26277_28450 = state_26267__$1;(statearr_26277_28450[2] = null);
(statearr_26277_28450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26281 = [null,null,null,null,null,null,null,null,null];(statearr_26281[0] = state_machine__22388__auto__);
(statearr_26281[1] = 1);
return statearr_26281;
});
var state_machine__22388__auto____1 = (function (state_26267){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26267);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26282){if((e26282 instanceof Object))
{var ex__22391__auto__ = e26282;var statearr_26283_28451 = state_26267;(statearr_26283_28451[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28452 = state_26267;
state_26267 = G__28452;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26267){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26284 = f__22464__auto__.call(null);(statearr_26284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26358){var state_val_26359 = (state_26358[1]);if((state_val_26359 === 1))
{var inst_26334 = cljs.core.seq.call(null,coll);var inst_26335 = inst_26334;var state_26358__$1 = (function (){var statearr_26360 = state_26358;(statearr_26360[7] = inst_26335);
return statearr_26360;
})();var statearr_26361_28453 = state_26358__$1;(statearr_26361_28453[2] = null);
(statearr_26361_28453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 2))
{var inst_26335 = (state_26358[7]);var state_26358__$1 = state_26358;if(cljs.core.truth_(inst_26335))
{var statearr_26362_28454 = state_26358__$1;(statearr_26362_28454[1] = 4);
} else
{var statearr_26363_28455 = state_26358__$1;(statearr_26363_28455[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 3))
{var inst_26356 = (state_26358[2]);var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26358__$1,inst_26356);
} else
{if((state_val_26359 === 4))
{var inst_26335 = (state_26358[7]);var inst_26338 = cljs.core.first.call(null,inst_26335);var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26358__$1,7,ch,inst_26338);
} else
{if((state_val_26359 === 5))
{var inst_26335 = (state_26358[7]);var state_26358__$1 = state_26358;var statearr_26364_28456 = state_26358__$1;(statearr_26364_28456[2] = inst_26335);
(statearr_26364_28456[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 6))
{var inst_26343 = (state_26358[2]);var state_26358__$1 = state_26358;if(cljs.core.truth_(inst_26343))
{var statearr_26365_28457 = state_26358__$1;(statearr_26365_28457[1] = 8);
} else
{var statearr_26366_28458 = state_26358__$1;(statearr_26366_28458[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 7))
{var inst_26340 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26367_28459 = state_26358__$1;(statearr_26367_28459[2] = inst_26340);
(statearr_26367_28459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 8))
{var inst_26335 = (state_26358[7]);var inst_26345 = cljs.core.next.call(null,inst_26335);var inst_26335__$1 = inst_26345;var state_26358__$1 = (function (){var statearr_26368 = state_26358;(statearr_26368[7] = inst_26335__$1);
return statearr_26368;
})();var statearr_26369_28460 = state_26358__$1;(statearr_26369_28460[2] = null);
(statearr_26369_28460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 9))
{var state_26358__$1 = state_26358;if(cljs.core.truth_(close_QMARK_))
{var statearr_26370_28461 = state_26358__$1;(statearr_26370_28461[1] = 11);
} else
{var statearr_26371_28462 = state_26358__$1;(statearr_26371_28462[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 10))
{var inst_26354 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26372_28463 = state_26358__$1;(statearr_26372_28463[2] = inst_26354);
(statearr_26372_28463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 11))
{var inst_26349 = cljs.core.async.close_BANG_.call(null,ch);var state_26358__$1 = state_26358;var statearr_26373_28464 = state_26358__$1;(statearr_26373_28464[2] = inst_26349);
(statearr_26373_28464[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 12))
{var state_26358__$1 = state_26358;var statearr_26374_28465 = state_26358__$1;(statearr_26374_28465[2] = null);
(statearr_26374_28465[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26359 === 13))
{var inst_26352 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26375_28466 = state_26358__$1;(statearr_26375_28466[2] = inst_26352);
(statearr_26375_28466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26379 = [null,null,null,null,null,null,null,null];(statearr_26379[0] = state_machine__22388__auto__);
(statearr_26379[1] = 1);
return statearr_26379;
});
var state_machine__22388__auto____1 = (function (state_26358){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26358);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26380){if((e26380 instanceof Object))
{var ex__22391__auto__ = e26380;var statearr_26381_28467 = state_26358;(statearr_26381_28467[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28468 = state_26358;
state_26358 = G__28468;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26358){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26382 = f__22464__auto__.call(null);(statearr_26382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26384 = {};return obj26384;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26386 = {};return obj26386;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26608 = (function (cs,ch,mult,meta26609){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26609 = meta26609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26608.cljs$lang$type = true;
cljs.core.async.t26608.cljs$lang$ctorStr = "cljs.core.async/t26608";
cljs.core.async.t26608.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26608");
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26608.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26610){var self__ = this;
var _26610__$1 = this;return self__.meta26609;
});})(cs))
;
cljs.core.async.t26608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26610,meta26609__$1){var self__ = this;
var _26610__$1 = this;return (new cljs.core.async.t26608(self__.cs,self__.ch,self__.mult,meta26609__$1));
});})(cs))
;
cljs.core.async.__GT_t26608 = ((function (cs){
return (function __GT_t26608(cs__$1,ch__$1,mult__$1,meta26609){return (new cljs.core.async.t26608(cs__$1,ch__$1,mult__$1,meta26609));
});})(cs))
;
}
return (new cljs.core.async.t26608(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22463__auto___28469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28469,cs,m,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28469,cs,m,dchan,dctr,done){
return (function (state_26741){var state_val_26742 = (state_26741[1]);if((state_val_26742 === 32))
{var inst_26683 = (state_26741[7]);var inst_26684 = (state_26741[8]);var inst_26682 = (state_26741[9]);var inst_26681 = (state_26741[10]);var inst_26696 = (state_26741[2]);var inst_26697 = (inst_26684 + 1);var tmp26743 = inst_26683;var tmp26744 = inst_26682;var tmp26745 = inst_26681;var inst_26681__$1 = tmp26745;var inst_26682__$1 = tmp26744;var inst_26683__$1 = tmp26743;var inst_26684__$1 = inst_26697;var state_26741__$1 = (function (){var statearr_26746 = state_26741;(statearr_26746[7] = inst_26683__$1);
(statearr_26746[8] = inst_26684__$1);
(statearr_26746[9] = inst_26682__$1);
(statearr_26746[10] = inst_26681__$1);
(statearr_26746[11] = inst_26696);
return statearr_26746;
})();var statearr_26747_28470 = state_26741__$1;(statearr_26747_28470[2] = null);
(statearr_26747_28470[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 1))
{var state_26741__$1 = state_26741;var statearr_26748_28471 = state_26741__$1;(statearr_26748_28471[2] = null);
(statearr_26748_28471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 33))
{var inst_26700 = (state_26741[12]);var inst_26702 = cljs.core.chunked_seq_QMARK_.call(null,inst_26700);var state_26741__$1 = state_26741;if(inst_26702)
{var statearr_26749_28472 = state_26741__$1;(statearr_26749_28472[1] = 36);
} else
{var statearr_26750_28473 = state_26741__$1;(statearr_26750_28473[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 2))
{var state_26741__$1 = state_26741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26741__$1,4,ch);
} else
{if((state_val_26742 === 34))
{var state_26741__$1 = state_26741;var statearr_26751_28474 = state_26741__$1;(statearr_26751_28474[2] = null);
(statearr_26751_28474[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 3))
{var inst_26739 = (state_26741[2]);var state_26741__$1 = state_26741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26741__$1,inst_26739);
} else
{if((state_val_26742 === 35))
{var inst_26723 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26752_28475 = state_26741__$1;(statearr_26752_28475[2] = inst_26723);
(statearr_26752_28475[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 4))
{var inst_26613 = (state_26741[13]);var inst_26613__$1 = (state_26741[2]);var inst_26614 = (inst_26613__$1 == null);var state_26741__$1 = (function (){var statearr_26753 = state_26741;(statearr_26753[13] = inst_26613__$1);
return statearr_26753;
})();if(cljs.core.truth_(inst_26614))
{var statearr_26754_28476 = state_26741__$1;(statearr_26754_28476[1] = 5);
} else
{var statearr_26755_28477 = state_26741__$1;(statearr_26755_28477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 36))
{var inst_26700 = (state_26741[12]);var inst_26704 = cljs.core.chunk_first.call(null,inst_26700);var inst_26705 = cljs.core.chunk_rest.call(null,inst_26700);var inst_26706 = cljs.core.count.call(null,inst_26704);var inst_26681 = inst_26705;var inst_26682 = inst_26704;var inst_26683 = inst_26706;var inst_26684 = 0;var state_26741__$1 = (function (){var statearr_26756 = state_26741;(statearr_26756[7] = inst_26683);
(statearr_26756[8] = inst_26684);
(statearr_26756[9] = inst_26682);
(statearr_26756[10] = inst_26681);
return statearr_26756;
})();var statearr_26757_28478 = state_26741__$1;(statearr_26757_28478[2] = null);
(statearr_26757_28478[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 5))
{var inst_26620 = cljs.core.deref.call(null,cs);var inst_26621 = cljs.core.seq.call(null,inst_26620);var inst_26622 = inst_26621;var inst_26623 = null;var inst_26624 = 0;var inst_26625 = 0;var state_26741__$1 = (function (){var statearr_26758 = state_26741;(statearr_26758[14] = inst_26625);
(statearr_26758[15] = inst_26624);
(statearr_26758[16] = inst_26623);
(statearr_26758[17] = inst_26622);
return statearr_26758;
})();var statearr_26759_28479 = state_26741__$1;(statearr_26759_28479[2] = null);
(statearr_26759_28479[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 37))
{var inst_26700 = (state_26741[12]);var inst_26613 = (state_26741[13]);var inst_26709 = (state_26741[18]);var inst_26709__$1 = cljs.core.first.call(null,inst_26700);var inst_26710 = cljs.core.async.put_BANG_.call(null,inst_26709__$1,inst_26613,done);var state_26741__$1 = (function (){var statearr_26760 = state_26741;(statearr_26760[18] = inst_26709__$1);
return statearr_26760;
})();if(cljs.core.truth_(inst_26710))
{var statearr_26761_28480 = state_26741__$1;(statearr_26761_28480[1] = 39);
} else
{var statearr_26762_28481 = state_26741__$1;(statearr_26762_28481[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 6))
{var inst_26673 = (state_26741[19]);var inst_26672 = cljs.core.deref.call(null,cs);var inst_26673__$1 = cljs.core.keys.call(null,inst_26672);var inst_26674 = cljs.core.count.call(null,inst_26673__$1);var inst_26675 = cljs.core.reset_BANG_.call(null,dctr,inst_26674);var inst_26680 = cljs.core.seq.call(null,inst_26673__$1);var inst_26681 = inst_26680;var inst_26682 = null;var inst_26683 = 0;var inst_26684 = 0;var state_26741__$1 = (function (){var statearr_26763 = state_26741;(statearr_26763[20] = inst_26675);
(statearr_26763[19] = inst_26673__$1);
(statearr_26763[7] = inst_26683);
(statearr_26763[8] = inst_26684);
(statearr_26763[9] = inst_26682);
(statearr_26763[10] = inst_26681);
return statearr_26763;
})();var statearr_26764_28482 = state_26741__$1;(statearr_26764_28482[2] = null);
(statearr_26764_28482[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 38))
{var inst_26720 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26765_28483 = state_26741__$1;(statearr_26765_28483[2] = inst_26720);
(statearr_26765_28483[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 7))
{var inst_26737 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26766_28484 = state_26741__$1;(statearr_26766_28484[2] = inst_26737);
(statearr_26766_28484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 39))
{var state_26741__$1 = state_26741;var statearr_26767_28485 = state_26741__$1;(statearr_26767_28485[2] = null);
(statearr_26767_28485[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 8))
{var inst_26625 = (state_26741[14]);var inst_26624 = (state_26741[15]);var inst_26627 = (inst_26625 < inst_26624);var inst_26628 = inst_26627;var state_26741__$1 = state_26741;if(cljs.core.truth_(inst_26628))
{var statearr_26768_28486 = state_26741__$1;(statearr_26768_28486[1] = 10);
} else
{var statearr_26769_28487 = state_26741__$1;(statearr_26769_28487[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 40))
{var inst_26709 = (state_26741[18]);var inst_26713 = done.call(null,null);var inst_26714 = cljs.core.async.untap_STAR_.call(null,m,inst_26709);var state_26741__$1 = (function (){var statearr_26770 = state_26741;(statearr_26770[21] = inst_26713);
return statearr_26770;
})();var statearr_26771_28488 = state_26741__$1;(statearr_26771_28488[2] = inst_26714);
(statearr_26771_28488[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 9))
{var inst_26670 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26772_28489 = state_26741__$1;(statearr_26772_28489[2] = inst_26670);
(statearr_26772_28489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 41))
{var inst_26700 = (state_26741[12]);var inst_26716 = (state_26741[2]);var inst_26717 = cljs.core.next.call(null,inst_26700);var inst_26681 = inst_26717;var inst_26682 = null;var inst_26683 = 0;var inst_26684 = 0;var state_26741__$1 = (function (){var statearr_26773 = state_26741;(statearr_26773[7] = inst_26683);
(statearr_26773[8] = inst_26684);
(statearr_26773[9] = inst_26682);
(statearr_26773[10] = inst_26681);
(statearr_26773[22] = inst_26716);
return statearr_26773;
})();var statearr_26774_28490 = state_26741__$1;(statearr_26774_28490[2] = null);
(statearr_26774_28490[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 10))
{var inst_26625 = (state_26741[14]);var inst_26623 = (state_26741[16]);var inst_26631 = cljs.core._nth.call(null,inst_26623,inst_26625);var inst_26632 = cljs.core.nth.call(null,inst_26631,0,null);var inst_26633 = cljs.core.nth.call(null,inst_26631,1,null);var state_26741__$1 = (function (){var statearr_26775 = state_26741;(statearr_26775[23] = inst_26632);
return statearr_26775;
})();if(cljs.core.truth_(inst_26633))
{var statearr_26776_28491 = state_26741__$1;(statearr_26776_28491[1] = 13);
} else
{var statearr_26777_28492 = state_26741__$1;(statearr_26777_28492[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 42))
{var state_26741__$1 = state_26741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26741__$1,45,dchan);
} else
{if((state_val_26742 === 11))
{var inst_26622 = (state_26741[17]);var inst_26642 = (state_26741[24]);var inst_26642__$1 = cljs.core.seq.call(null,inst_26622);var state_26741__$1 = (function (){var statearr_26778 = state_26741;(statearr_26778[24] = inst_26642__$1);
return statearr_26778;
})();if(inst_26642__$1)
{var statearr_26779_28493 = state_26741__$1;(statearr_26779_28493[1] = 16);
} else
{var statearr_26780_28494 = state_26741__$1;(statearr_26780_28494[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 43))
{var state_26741__$1 = state_26741;var statearr_26781_28495 = state_26741__$1;(statearr_26781_28495[2] = null);
(statearr_26781_28495[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 12))
{var inst_26668 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26782_28496 = state_26741__$1;(statearr_26782_28496[2] = inst_26668);
(statearr_26782_28496[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 44))
{var inst_26734 = (state_26741[2]);var state_26741__$1 = (function (){var statearr_26783 = state_26741;(statearr_26783[25] = inst_26734);
return statearr_26783;
})();var statearr_26784_28497 = state_26741__$1;(statearr_26784_28497[2] = null);
(statearr_26784_28497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 13))
{var inst_26632 = (state_26741[23]);var inst_26635 = cljs.core.async.close_BANG_.call(null,inst_26632);var state_26741__$1 = state_26741;var statearr_26785_28498 = state_26741__$1;(statearr_26785_28498[2] = inst_26635);
(statearr_26785_28498[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 45))
{var inst_26731 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26789_28499 = state_26741__$1;(statearr_26789_28499[2] = inst_26731);
(statearr_26789_28499[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 14))
{var state_26741__$1 = state_26741;var statearr_26790_28500 = state_26741__$1;(statearr_26790_28500[2] = null);
(statearr_26790_28500[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 15))
{var inst_26625 = (state_26741[14]);var inst_26624 = (state_26741[15]);var inst_26623 = (state_26741[16]);var inst_26622 = (state_26741[17]);var inst_26638 = (state_26741[2]);var inst_26639 = (inst_26625 + 1);var tmp26786 = inst_26624;var tmp26787 = inst_26623;var tmp26788 = inst_26622;var inst_26622__$1 = tmp26788;var inst_26623__$1 = tmp26787;var inst_26624__$1 = tmp26786;var inst_26625__$1 = inst_26639;var state_26741__$1 = (function (){var statearr_26791 = state_26741;(statearr_26791[14] = inst_26625__$1);
(statearr_26791[15] = inst_26624__$1);
(statearr_26791[16] = inst_26623__$1);
(statearr_26791[17] = inst_26622__$1);
(statearr_26791[26] = inst_26638);
return statearr_26791;
})();var statearr_26792_28501 = state_26741__$1;(statearr_26792_28501[2] = null);
(statearr_26792_28501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 16))
{var inst_26642 = (state_26741[24]);var inst_26644 = cljs.core.chunked_seq_QMARK_.call(null,inst_26642);var state_26741__$1 = state_26741;if(inst_26644)
{var statearr_26793_28502 = state_26741__$1;(statearr_26793_28502[1] = 19);
} else
{var statearr_26794_28503 = state_26741__$1;(statearr_26794_28503[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 17))
{var state_26741__$1 = state_26741;var statearr_26795_28504 = state_26741__$1;(statearr_26795_28504[2] = null);
(statearr_26795_28504[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 18))
{var inst_26666 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26796_28505 = state_26741__$1;(statearr_26796_28505[2] = inst_26666);
(statearr_26796_28505[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 19))
{var inst_26642 = (state_26741[24]);var inst_26646 = cljs.core.chunk_first.call(null,inst_26642);var inst_26647 = cljs.core.chunk_rest.call(null,inst_26642);var inst_26648 = cljs.core.count.call(null,inst_26646);var inst_26622 = inst_26647;var inst_26623 = inst_26646;var inst_26624 = inst_26648;var inst_26625 = 0;var state_26741__$1 = (function (){var statearr_26797 = state_26741;(statearr_26797[14] = inst_26625);
(statearr_26797[15] = inst_26624);
(statearr_26797[16] = inst_26623);
(statearr_26797[17] = inst_26622);
return statearr_26797;
})();var statearr_26798_28506 = state_26741__$1;(statearr_26798_28506[2] = null);
(statearr_26798_28506[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 20))
{var inst_26642 = (state_26741[24]);var inst_26652 = cljs.core.first.call(null,inst_26642);var inst_26653 = cljs.core.nth.call(null,inst_26652,0,null);var inst_26654 = cljs.core.nth.call(null,inst_26652,1,null);var state_26741__$1 = (function (){var statearr_26799 = state_26741;(statearr_26799[27] = inst_26653);
return statearr_26799;
})();if(cljs.core.truth_(inst_26654))
{var statearr_26800_28507 = state_26741__$1;(statearr_26800_28507[1] = 22);
} else
{var statearr_26801_28508 = state_26741__$1;(statearr_26801_28508[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 21))
{var inst_26663 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26802_28509 = state_26741__$1;(statearr_26802_28509[2] = inst_26663);
(statearr_26802_28509[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 22))
{var inst_26653 = (state_26741[27]);var inst_26656 = cljs.core.async.close_BANG_.call(null,inst_26653);var state_26741__$1 = state_26741;var statearr_26803_28510 = state_26741__$1;(statearr_26803_28510[2] = inst_26656);
(statearr_26803_28510[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 23))
{var state_26741__$1 = state_26741;var statearr_26804_28511 = state_26741__$1;(statearr_26804_28511[2] = null);
(statearr_26804_28511[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 24))
{var inst_26642 = (state_26741[24]);var inst_26659 = (state_26741[2]);var inst_26660 = cljs.core.next.call(null,inst_26642);var inst_26622 = inst_26660;var inst_26623 = null;var inst_26624 = 0;var inst_26625 = 0;var state_26741__$1 = (function (){var statearr_26805 = state_26741;(statearr_26805[14] = inst_26625);
(statearr_26805[15] = inst_26624);
(statearr_26805[28] = inst_26659);
(statearr_26805[16] = inst_26623);
(statearr_26805[17] = inst_26622);
return statearr_26805;
})();var statearr_26806_28512 = state_26741__$1;(statearr_26806_28512[2] = null);
(statearr_26806_28512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 25))
{var inst_26683 = (state_26741[7]);var inst_26684 = (state_26741[8]);var inst_26686 = (inst_26684 < inst_26683);var inst_26687 = inst_26686;var state_26741__$1 = state_26741;if(cljs.core.truth_(inst_26687))
{var statearr_26807_28513 = state_26741__$1;(statearr_26807_28513[1] = 27);
} else
{var statearr_26808_28514 = state_26741__$1;(statearr_26808_28514[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 26))
{var inst_26673 = (state_26741[19]);var inst_26727 = (state_26741[2]);var inst_26728 = cljs.core.seq.call(null,inst_26673);var state_26741__$1 = (function (){var statearr_26809 = state_26741;(statearr_26809[29] = inst_26727);
return statearr_26809;
})();if(inst_26728)
{var statearr_26810_28515 = state_26741__$1;(statearr_26810_28515[1] = 42);
} else
{var statearr_26811_28516 = state_26741__$1;(statearr_26811_28516[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 27))
{var inst_26684 = (state_26741[8]);var inst_26613 = (state_26741[13]);var inst_26682 = (state_26741[9]);var inst_26689 = (state_26741[30]);var inst_26689__$1 = cljs.core._nth.call(null,inst_26682,inst_26684);var inst_26690 = cljs.core.async.put_BANG_.call(null,inst_26689__$1,inst_26613,done);var state_26741__$1 = (function (){var statearr_26812 = state_26741;(statearr_26812[30] = inst_26689__$1);
return statearr_26812;
})();if(cljs.core.truth_(inst_26690))
{var statearr_26813_28517 = state_26741__$1;(statearr_26813_28517[1] = 30);
} else
{var statearr_26814_28518 = state_26741__$1;(statearr_26814_28518[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 28))
{var inst_26700 = (state_26741[12]);var inst_26681 = (state_26741[10]);var inst_26700__$1 = cljs.core.seq.call(null,inst_26681);var state_26741__$1 = (function (){var statearr_26815 = state_26741;(statearr_26815[12] = inst_26700__$1);
return statearr_26815;
})();if(inst_26700__$1)
{var statearr_26816_28519 = state_26741__$1;(statearr_26816_28519[1] = 33);
} else
{var statearr_26817_28520 = state_26741__$1;(statearr_26817_28520[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 29))
{var inst_26725 = (state_26741[2]);var state_26741__$1 = state_26741;var statearr_26818_28521 = state_26741__$1;(statearr_26818_28521[2] = inst_26725);
(statearr_26818_28521[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 30))
{var state_26741__$1 = state_26741;var statearr_26819_28522 = state_26741__$1;(statearr_26819_28522[2] = null);
(statearr_26819_28522[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26742 === 31))
{var inst_26689 = (state_26741[30]);var inst_26693 = done.call(null,null);var inst_26694 = cljs.core.async.untap_STAR_.call(null,m,inst_26689);var state_26741__$1 = (function (){var statearr_26820 = state_26741;(statearr_26820[31] = inst_26693);
return statearr_26820;
})();var statearr_26821_28523 = state_26741__$1;(statearr_26821_28523[2] = inst_26694);
(statearr_26821_28523[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28469,cs,m,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28469,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26825[0] = state_machine__22388__auto__);
(statearr_26825[1] = 1);
return statearr_26825;
});
var state_machine__22388__auto____1 = (function (state_26741){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26741);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26826){if((e26826 instanceof Object))
{var ex__22391__auto__ = e26826;var statearr_26827_28524 = state_26741;(statearr_26827_28524[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28525 = state_26741;
state_26741 = G__28525;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26741){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28469,cs,m,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_26828 = f__22464__auto__.call(null);(statearr_26828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28469);
return statearr_26828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28469,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26830 = {};return obj26830;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26950 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26951){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta26951 = meta26951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26950.cljs$lang$type = true;
cljs.core.async.t26950.cljs$lang$ctorStr = "cljs.core.async/t26950";
cljs.core.async.t26950.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26950");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26952){var self__ = this;
var _26952__$1 = this;return self__.meta26951;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26952,meta26951__$1){var self__ = this;
var _26952__$1 = this;return (new cljs.core.async.t26950(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26951__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26950 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26950(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26951){return (new cljs.core.async.t26950(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26951));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26950(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22463__auto___28526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27022){var state_val_27023 = (state_27022[1]);if((state_val_27023 === 1))
{var inst_26956 = (state_27022[7]);var inst_26956__$1 = calc_state.call(null);var inst_26957 = cljs.core.seq_QMARK_.call(null,inst_26956__$1);var state_27022__$1 = (function (){var statearr_27024 = state_27022;(statearr_27024[7] = inst_26956__$1);
return statearr_27024;
})();if(inst_26957)
{var statearr_27025_28527 = state_27022__$1;(statearr_27025_28527[1] = 2);
} else
{var statearr_27026_28528 = state_27022__$1;(statearr_27026_28528[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 2))
{var inst_26956 = (state_27022[7]);var inst_26959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26956);var state_27022__$1 = state_27022;var statearr_27027_28529 = state_27022__$1;(statearr_27027_28529[2] = inst_26959);
(statearr_27027_28529[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 3))
{var inst_26956 = (state_27022[7]);var state_27022__$1 = state_27022;var statearr_27028_28530 = state_27022__$1;(statearr_27028_28530[2] = inst_26956);
(statearr_27028_28530[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 4))
{var inst_26956 = (state_27022[7]);var inst_26962 = (state_27022[2]);var inst_26963 = cljs.core.get.call(null,inst_26962,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26964 = cljs.core.get.call(null,inst_26962,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26965 = cljs.core.get.call(null,inst_26962,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26966 = inst_26956;var state_27022__$1 = (function (){var statearr_27029 = state_27022;(statearr_27029[8] = inst_26966);
(statearr_27029[9] = inst_26965);
(statearr_27029[10] = inst_26964);
(statearr_27029[11] = inst_26963);
return statearr_27029;
})();var statearr_27030_28531 = state_27022__$1;(statearr_27030_28531[2] = null);
(statearr_27030_28531[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 5))
{var inst_26966 = (state_27022[8]);var inst_26969 = cljs.core.seq_QMARK_.call(null,inst_26966);var state_27022__$1 = state_27022;if(inst_26969)
{var statearr_27031_28532 = state_27022__$1;(statearr_27031_28532[1] = 7);
} else
{var statearr_27032_28533 = state_27022__$1;(statearr_27032_28533[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 6))
{var inst_27020 = (state_27022[2]);var state_27022__$1 = state_27022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27022__$1,inst_27020);
} else
{if((state_val_27023 === 7))
{var inst_26966 = (state_27022[8]);var inst_26971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26966);var state_27022__$1 = state_27022;var statearr_27033_28534 = state_27022__$1;(statearr_27033_28534[2] = inst_26971);
(statearr_27033_28534[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 8))
{var inst_26966 = (state_27022[8]);var state_27022__$1 = state_27022;var statearr_27034_28535 = state_27022__$1;(statearr_27034_28535[2] = inst_26966);
(statearr_27034_28535[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 9))
{var inst_26974 = (state_27022[12]);var inst_26974__$1 = (state_27022[2]);var inst_26975 = cljs.core.get.call(null,inst_26974__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26976 = cljs.core.get.call(null,inst_26974__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26977 = cljs.core.get.call(null,inst_26974__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27022__$1 = (function (){var statearr_27035 = state_27022;(statearr_27035[13] = inst_26977);
(statearr_27035[14] = inst_26976);
(statearr_27035[12] = inst_26974__$1);
return statearr_27035;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27022__$1,10,inst_26975);
} else
{if((state_val_27023 === 10))
{var inst_26982 = (state_27022[15]);var inst_26981 = (state_27022[16]);var inst_26980 = (state_27022[2]);var inst_26981__$1 = cljs.core.nth.call(null,inst_26980,0,null);var inst_26982__$1 = cljs.core.nth.call(null,inst_26980,1,null);var inst_26983 = (inst_26981__$1 == null);var inst_26984 = cljs.core._EQ_.call(null,inst_26982__$1,change);var inst_26985 = (inst_26983) || (inst_26984);var state_27022__$1 = (function (){var statearr_27036 = state_27022;(statearr_27036[15] = inst_26982__$1);
(statearr_27036[16] = inst_26981__$1);
return statearr_27036;
})();if(cljs.core.truth_(inst_26985))
{var statearr_27037_28536 = state_27022__$1;(statearr_27037_28536[1] = 11);
} else
{var statearr_27038_28537 = state_27022__$1;(statearr_27038_28537[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 11))
{var inst_26981 = (state_27022[16]);var inst_26987 = (inst_26981 == null);var state_27022__$1 = state_27022;if(cljs.core.truth_(inst_26987))
{var statearr_27039_28538 = state_27022__$1;(statearr_27039_28538[1] = 14);
} else
{var statearr_27040_28539 = state_27022__$1;(statearr_27040_28539[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 12))
{var inst_26982 = (state_27022[15]);var inst_26996 = (state_27022[17]);var inst_26977 = (state_27022[13]);var inst_26996__$1 = inst_26977.call(null,inst_26982);var state_27022__$1 = (function (){var statearr_27041 = state_27022;(statearr_27041[17] = inst_26996__$1);
return statearr_27041;
})();if(cljs.core.truth_(inst_26996__$1))
{var statearr_27042_28540 = state_27022__$1;(statearr_27042_28540[1] = 17);
} else
{var statearr_27043_28541 = state_27022__$1;(statearr_27043_28541[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 13))
{var inst_27018 = (state_27022[2]);var state_27022__$1 = state_27022;var statearr_27044_28542 = state_27022__$1;(statearr_27044_28542[2] = inst_27018);
(statearr_27044_28542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 14))
{var inst_26982 = (state_27022[15]);var inst_26989 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26982);var state_27022__$1 = state_27022;var statearr_27045_28543 = state_27022__$1;(statearr_27045_28543[2] = inst_26989);
(statearr_27045_28543[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 15))
{var state_27022__$1 = state_27022;var statearr_27046_28544 = state_27022__$1;(statearr_27046_28544[2] = null);
(statearr_27046_28544[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 16))
{var inst_26992 = (state_27022[2]);var inst_26993 = calc_state.call(null);var inst_26966 = inst_26993;var state_27022__$1 = (function (){var statearr_27047 = state_27022;(statearr_27047[18] = inst_26992);
(statearr_27047[8] = inst_26966);
return statearr_27047;
})();var statearr_27048_28545 = state_27022__$1;(statearr_27048_28545[2] = null);
(statearr_27048_28545[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 17))
{var inst_26996 = (state_27022[17]);var state_27022__$1 = state_27022;var statearr_27049_28546 = state_27022__$1;(statearr_27049_28546[2] = inst_26996);
(statearr_27049_28546[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 18))
{var inst_26982 = (state_27022[15]);var inst_26977 = (state_27022[13]);var inst_26976 = (state_27022[14]);var inst_26999 = cljs.core.empty_QMARK_.call(null,inst_26977);var inst_27000 = inst_26976.call(null,inst_26982);var inst_27001 = cljs.core.not.call(null,inst_27000);var inst_27002 = (inst_26999) && (inst_27001);var state_27022__$1 = state_27022;var statearr_27050_28547 = state_27022__$1;(statearr_27050_28547[2] = inst_27002);
(statearr_27050_28547[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 19))
{var inst_27004 = (state_27022[2]);var state_27022__$1 = state_27022;if(cljs.core.truth_(inst_27004))
{var statearr_27051_28548 = state_27022__$1;(statearr_27051_28548[1] = 20);
} else
{var statearr_27052_28549 = state_27022__$1;(statearr_27052_28549[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 20))
{var inst_26981 = (state_27022[16]);var state_27022__$1 = state_27022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27022__$1,23,out,inst_26981);
} else
{if((state_val_27023 === 21))
{var inst_26974 = (state_27022[12]);var inst_26966 = inst_26974;var state_27022__$1 = (function (){var statearr_27053 = state_27022;(statearr_27053[8] = inst_26966);
return statearr_27053;
})();var statearr_27054_28550 = state_27022__$1;(statearr_27054_28550[2] = null);
(statearr_27054_28550[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 22))
{var inst_27016 = (state_27022[2]);var state_27022__$1 = state_27022;var statearr_27055_28551 = state_27022__$1;(statearr_27055_28551[2] = inst_27016);
(statearr_27055_28551[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 23))
{var inst_27007 = (state_27022[2]);var state_27022__$1 = state_27022;if(cljs.core.truth_(inst_27007))
{var statearr_27056_28552 = state_27022__$1;(statearr_27056_28552[1] = 24);
} else
{var statearr_27057_28553 = state_27022__$1;(statearr_27057_28553[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 24))
{var inst_26974 = (state_27022[12]);var inst_26966 = inst_26974;var state_27022__$1 = (function (){var statearr_27058 = state_27022;(statearr_27058[8] = inst_26966);
return statearr_27058;
})();var statearr_27059_28554 = state_27022__$1;(statearr_27059_28554[2] = null);
(statearr_27059_28554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 25))
{var state_27022__$1 = state_27022;var statearr_27060_28555 = state_27022__$1;(statearr_27060_28555[2] = null);
(statearr_27060_28555[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27023 === 26))
{var inst_27012 = (state_27022[2]);var state_27022__$1 = state_27022;var statearr_27061_28556 = state_27022__$1;(statearr_27061_28556[2] = inst_27012);
(statearr_27061_28556[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22387__auto__,c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27065[0] = state_machine__22388__auto__);
(statearr_27065[1] = 1);
return statearr_27065;
});
var state_machine__22388__auto____1 = (function (state_27022){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27022);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27066){if((e27066 instanceof Object))
{var ex__22391__auto__ = e27066;var statearr_27067_28557 = state_27022;(statearr_27067_28557[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28558 = state_27022;
state_27022 = G__28558;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27022){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22465__auto__ = (function (){var statearr_27068 = f__22464__auto__.call(null);(statearr_27068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28526);
return statearr_27068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27070 = {};return obj27070;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__19803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19803__auto__,mults){
return (function (p1__27071_SHARP_){if(cljs.core.truth_(p1__27071_SHARP_.call(null,topic)))
{return p1__27071_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27071_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27194 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27195){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27195 = meta27195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27194.cljs$lang$type = true;
cljs.core.async.t27194.cljs$lang$ctorStr = "cljs.core.async/t27194";
cljs.core.async.t27194.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27194");
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27194.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27196){var self__ = this;
var _27196__$1 = this;return self__.meta27195;
});})(mults,ensure_mult))
;
cljs.core.async.t27194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27196,meta27195__$1){var self__ = this;
var _27196__$1 = this;return (new cljs.core.async.t27194(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27195__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27194 = ((function (mults,ensure_mult){
return (function __GT_t27194(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27195){return (new cljs.core.async.t27194(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27195));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27194(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22463__auto___28559 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28559,mults,ensure_mult,p){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28559,mults,ensure_mult,p){
return (function (state_27268){var state_val_27269 = (state_27268[1]);if((state_val_27269 === 1))
{var state_27268__$1 = state_27268;var statearr_27270_28560 = state_27268__$1;(statearr_27270_28560[2] = null);
(statearr_27270_28560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 2))
{var state_27268__$1 = state_27268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27268__$1,4,ch);
} else
{if((state_val_27269 === 3))
{var inst_27266 = (state_27268[2]);var state_27268__$1 = state_27268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27268__$1,inst_27266);
} else
{if((state_val_27269 === 4))
{var inst_27199 = (state_27268[7]);var inst_27199__$1 = (state_27268[2]);var inst_27200 = (inst_27199__$1 == null);var state_27268__$1 = (function (){var statearr_27271 = state_27268;(statearr_27271[7] = inst_27199__$1);
return statearr_27271;
})();if(cljs.core.truth_(inst_27200))
{var statearr_27272_28561 = state_27268__$1;(statearr_27272_28561[1] = 5);
} else
{var statearr_27273_28562 = state_27268__$1;(statearr_27273_28562[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 5))
{var inst_27206 = cljs.core.deref.call(null,mults);var inst_27207 = cljs.core.vals.call(null,inst_27206);var inst_27208 = cljs.core.seq.call(null,inst_27207);var inst_27209 = inst_27208;var inst_27210 = null;var inst_27211 = 0;var inst_27212 = 0;var state_27268__$1 = (function (){var statearr_27274 = state_27268;(statearr_27274[8] = inst_27211);
(statearr_27274[9] = inst_27212);
(statearr_27274[10] = inst_27210);
(statearr_27274[11] = inst_27209);
return statearr_27274;
})();var statearr_27275_28563 = state_27268__$1;(statearr_27275_28563[2] = null);
(statearr_27275_28563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 6))
{var inst_27199 = (state_27268[7]);var inst_27249 = (state_27268[12]);var inst_27247 = (state_27268[13]);var inst_27247__$1 = topic_fn.call(null,inst_27199);var inst_27248 = cljs.core.deref.call(null,mults);var inst_27249__$1 = cljs.core.get.call(null,inst_27248,inst_27247__$1);var state_27268__$1 = (function (){var statearr_27276 = state_27268;(statearr_27276[12] = inst_27249__$1);
(statearr_27276[13] = inst_27247__$1);
return statearr_27276;
})();if(cljs.core.truth_(inst_27249__$1))
{var statearr_27277_28564 = state_27268__$1;(statearr_27277_28564[1] = 19);
} else
{var statearr_27278_28565 = state_27268__$1;(statearr_27278_28565[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 7))
{var inst_27264 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27279_28566 = state_27268__$1;(statearr_27279_28566[2] = inst_27264);
(statearr_27279_28566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 8))
{var inst_27211 = (state_27268[8]);var inst_27212 = (state_27268[9]);var inst_27214 = (inst_27212 < inst_27211);var inst_27215 = inst_27214;var state_27268__$1 = state_27268;if(cljs.core.truth_(inst_27215))
{var statearr_27283_28567 = state_27268__$1;(statearr_27283_28567[1] = 10);
} else
{var statearr_27284_28568 = state_27268__$1;(statearr_27284_28568[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 9))
{var inst_27245 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27285_28569 = state_27268__$1;(statearr_27285_28569[2] = inst_27245);
(statearr_27285_28569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 10))
{var inst_27211 = (state_27268[8]);var inst_27212 = (state_27268[9]);var inst_27210 = (state_27268[10]);var inst_27209 = (state_27268[11]);var inst_27217 = cljs.core._nth.call(null,inst_27210,inst_27212);var inst_27218 = cljs.core.async.muxch_STAR_.call(null,inst_27217);var inst_27219 = cljs.core.async.close_BANG_.call(null,inst_27218);var inst_27220 = (inst_27212 + 1);var tmp27280 = inst_27211;var tmp27281 = inst_27210;var tmp27282 = inst_27209;var inst_27209__$1 = tmp27282;var inst_27210__$1 = tmp27281;var inst_27211__$1 = tmp27280;var inst_27212__$1 = inst_27220;var state_27268__$1 = (function (){var statearr_27286 = state_27268;(statearr_27286[8] = inst_27211__$1);
(statearr_27286[9] = inst_27212__$1);
(statearr_27286[14] = inst_27219);
(statearr_27286[10] = inst_27210__$1);
(statearr_27286[11] = inst_27209__$1);
return statearr_27286;
})();var statearr_27287_28570 = state_27268__$1;(statearr_27287_28570[2] = null);
(statearr_27287_28570[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 11))
{var inst_27223 = (state_27268[15]);var inst_27209 = (state_27268[11]);var inst_27223__$1 = cljs.core.seq.call(null,inst_27209);var state_27268__$1 = (function (){var statearr_27288 = state_27268;(statearr_27288[15] = inst_27223__$1);
return statearr_27288;
})();if(inst_27223__$1)
{var statearr_27289_28571 = state_27268__$1;(statearr_27289_28571[1] = 13);
} else
{var statearr_27290_28572 = state_27268__$1;(statearr_27290_28572[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 12))
{var inst_27243 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27291_28573 = state_27268__$1;(statearr_27291_28573[2] = inst_27243);
(statearr_27291_28573[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 13))
{var inst_27223 = (state_27268[15]);var inst_27225 = cljs.core.chunked_seq_QMARK_.call(null,inst_27223);var state_27268__$1 = state_27268;if(inst_27225)
{var statearr_27292_28574 = state_27268__$1;(statearr_27292_28574[1] = 16);
} else
{var statearr_27293_28575 = state_27268__$1;(statearr_27293_28575[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 14))
{var state_27268__$1 = state_27268;var statearr_27294_28576 = state_27268__$1;(statearr_27294_28576[2] = null);
(statearr_27294_28576[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 15))
{var inst_27241 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27295_28577 = state_27268__$1;(statearr_27295_28577[2] = inst_27241);
(statearr_27295_28577[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 16))
{var inst_27223 = (state_27268[15]);var inst_27227 = cljs.core.chunk_first.call(null,inst_27223);var inst_27228 = cljs.core.chunk_rest.call(null,inst_27223);var inst_27229 = cljs.core.count.call(null,inst_27227);var inst_27209 = inst_27228;var inst_27210 = inst_27227;var inst_27211 = inst_27229;var inst_27212 = 0;var state_27268__$1 = (function (){var statearr_27296 = state_27268;(statearr_27296[8] = inst_27211);
(statearr_27296[9] = inst_27212);
(statearr_27296[10] = inst_27210);
(statearr_27296[11] = inst_27209);
return statearr_27296;
})();var statearr_27297_28578 = state_27268__$1;(statearr_27297_28578[2] = null);
(statearr_27297_28578[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 17))
{var inst_27223 = (state_27268[15]);var inst_27232 = cljs.core.first.call(null,inst_27223);var inst_27233 = cljs.core.async.muxch_STAR_.call(null,inst_27232);var inst_27234 = cljs.core.async.close_BANG_.call(null,inst_27233);var inst_27235 = cljs.core.next.call(null,inst_27223);var inst_27209 = inst_27235;var inst_27210 = null;var inst_27211 = 0;var inst_27212 = 0;var state_27268__$1 = (function (){var statearr_27298 = state_27268;(statearr_27298[16] = inst_27234);
(statearr_27298[8] = inst_27211);
(statearr_27298[9] = inst_27212);
(statearr_27298[10] = inst_27210);
(statearr_27298[11] = inst_27209);
return statearr_27298;
})();var statearr_27299_28579 = state_27268__$1;(statearr_27299_28579[2] = null);
(statearr_27299_28579[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 18))
{var inst_27238 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27300_28580 = state_27268__$1;(statearr_27300_28580[2] = inst_27238);
(statearr_27300_28580[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 19))
{var inst_27199 = (state_27268[7]);var inst_27249 = (state_27268[12]);var inst_27251 = cljs.core.async.muxch_STAR_.call(null,inst_27249);var state_27268__$1 = state_27268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27268__$1,22,inst_27251,inst_27199);
} else
{if((state_val_27269 === 20))
{var state_27268__$1 = state_27268;var statearr_27301_28581 = state_27268__$1;(statearr_27301_28581[2] = null);
(statearr_27301_28581[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 21))
{var inst_27261 = (state_27268[2]);var state_27268__$1 = (function (){var statearr_27302 = state_27268;(statearr_27302[17] = inst_27261);
return statearr_27302;
})();var statearr_27303_28582 = state_27268__$1;(statearr_27303_28582[2] = null);
(statearr_27303_28582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 22))
{var inst_27253 = (state_27268[2]);var state_27268__$1 = state_27268;if(cljs.core.truth_(inst_27253))
{var statearr_27304_28583 = state_27268__$1;(statearr_27304_28583[1] = 23);
} else
{var statearr_27305_28584 = state_27268__$1;(statearr_27305_28584[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 23))
{var state_27268__$1 = state_27268;var statearr_27306_28585 = state_27268__$1;(statearr_27306_28585[2] = null);
(statearr_27306_28585[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 24))
{var inst_27247 = (state_27268[13]);var inst_27256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27247);var state_27268__$1 = state_27268;var statearr_27307_28586 = state_27268__$1;(statearr_27307_28586[2] = inst_27256);
(statearr_27307_28586[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27269 === 25))
{var inst_27258 = (state_27268[2]);var state_27268__$1 = state_27268;var statearr_27308_28587 = state_27268__$1;(statearr_27308_28587[2] = inst_27258);
(statearr_27308_28587[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28559,mults,ensure_mult,p))
;return ((function (switch__22387__auto__,c__22463__auto___28559,mults,ensure_mult,p){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27312[0] = state_machine__22388__auto__);
(statearr_27312[1] = 1);
return statearr_27312;
});
var state_machine__22388__auto____1 = (function (state_27268){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27268);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27313){if((e27313 instanceof Object))
{var ex__22391__auto__ = e27313;var statearr_27314_28588 = state_27268;(statearr_27314_28588[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27268);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28589 = state_27268;
state_27268 = G__28589;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27268){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28559,mults,ensure_mult,p))
})();var state__22465__auto__ = (function (){var statearr_27315 = f__22464__auto__.call(null);(statearr_27315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28559);
return statearr_27315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28559,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__22463__auto___28590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27422){var state_val_27423 = (state_27422[1]);if((state_val_27423 === 1))
{var state_27422__$1 = state_27422;var statearr_27424_28591 = state_27422__$1;(statearr_27424_28591[2] = null);
(statearr_27424_28591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 2))
{var inst_27385 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27386 = 0;var state_27422__$1 = (function (){var statearr_27425 = state_27422;(statearr_27425[7] = inst_27386);
(statearr_27425[8] = inst_27385);
return statearr_27425;
})();var statearr_27426_28592 = state_27422__$1;(statearr_27426_28592[2] = null);
(statearr_27426_28592[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 3))
{var inst_27420 = (state_27422[2]);var state_27422__$1 = state_27422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27422__$1,inst_27420);
} else
{if((state_val_27423 === 4))
{var inst_27386 = (state_27422[7]);var inst_27388 = (inst_27386 < cnt);var state_27422__$1 = state_27422;if(cljs.core.truth_(inst_27388))
{var statearr_27427_28593 = state_27422__$1;(statearr_27427_28593[1] = 6);
} else
{var statearr_27428_28594 = state_27422__$1;(statearr_27428_28594[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 5))
{var inst_27406 = (state_27422[2]);var state_27422__$1 = (function (){var statearr_27429 = state_27422;(statearr_27429[9] = inst_27406);
return statearr_27429;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27422__$1,12,dchan);
} else
{if((state_val_27423 === 6))
{var state_27422__$1 = state_27422;var statearr_27430_28595 = state_27422__$1;(statearr_27430_28595[2] = null);
(statearr_27430_28595[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 7))
{var state_27422__$1 = state_27422;var statearr_27431_28596 = state_27422__$1;(statearr_27431_28596[2] = null);
(statearr_27431_28596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 8))
{var inst_27404 = (state_27422[2]);var state_27422__$1 = state_27422;var statearr_27432_28597 = state_27422__$1;(statearr_27432_28597[2] = inst_27404);
(statearr_27432_28597[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 9))
{var inst_27386 = (state_27422[7]);var inst_27399 = (state_27422[2]);var inst_27400 = (inst_27386 + 1);var inst_27386__$1 = inst_27400;var state_27422__$1 = (function (){var statearr_27433 = state_27422;(statearr_27433[10] = inst_27399);
(statearr_27433[7] = inst_27386__$1);
return statearr_27433;
})();var statearr_27434_28598 = state_27422__$1;(statearr_27434_28598[2] = null);
(statearr_27434_28598[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 10))
{var inst_27390 = (state_27422[2]);var inst_27391 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27422__$1 = (function (){var statearr_27435 = state_27422;(statearr_27435[11] = inst_27390);
return statearr_27435;
})();var statearr_27436_28599 = state_27422__$1;(statearr_27436_28599[2] = inst_27391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27422__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 11))
{var inst_27386 = (state_27422[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27422,10,Object,null,9);var inst_27395 = chs__$1.call(null,inst_27386);var inst_27396 = done.call(null,inst_27386);var inst_27397 = cljs.core.async.take_BANG_.call(null,inst_27395,inst_27396);var state_27422__$1 = state_27422;var statearr_27437_28600 = state_27422__$1;(statearr_27437_28600[2] = inst_27397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27422__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 12))
{var inst_27408 = (state_27422[12]);var inst_27408__$1 = (state_27422[2]);var inst_27409 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27408__$1);var state_27422__$1 = (function (){var statearr_27438 = state_27422;(statearr_27438[12] = inst_27408__$1);
return statearr_27438;
})();if(cljs.core.truth_(inst_27409))
{var statearr_27439_28601 = state_27422__$1;(statearr_27439_28601[1] = 13);
} else
{var statearr_27440_28602 = state_27422__$1;(statearr_27440_28602[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 13))
{var inst_27411 = cljs.core.async.close_BANG_.call(null,out);var state_27422__$1 = state_27422;var statearr_27441_28603 = state_27422__$1;(statearr_27441_28603[2] = inst_27411);
(statearr_27441_28603[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 14))
{var inst_27408 = (state_27422[12]);var inst_27413 = cljs.core.apply.call(null,f,inst_27408);var state_27422__$1 = state_27422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27422__$1,16,out,inst_27413);
} else
{if((state_val_27423 === 15))
{var inst_27418 = (state_27422[2]);var state_27422__$1 = state_27422;var statearr_27442_28604 = state_27422__$1;(statearr_27442_28604[2] = inst_27418);
(statearr_27442_28604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27423 === 16))
{var inst_27415 = (state_27422[2]);var state_27422__$1 = (function (){var statearr_27443 = state_27422;(statearr_27443[13] = inst_27415);
return statearr_27443;
})();var statearr_27444_28605 = state_27422__$1;(statearr_27444_28605[2] = null);
(statearr_27444_28605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27448[0] = state_machine__22388__auto__);
(statearr_27448[1] = 1);
return statearr_27448;
});
var state_machine__22388__auto____1 = (function (state_27422){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27422);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27449){if((e27449 instanceof Object))
{var ex__22391__auto__ = e27449;var statearr_27450_28606 = state_27422;(statearr_27450_28606[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28607 = state_27422;
state_27422 = G__28607;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27422){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_27451 = f__22464__auto__.call(null);(statearr_27451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28590);
return statearr_27451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28608,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28608,out){
return (function (state_27535){var state_val_27536 = (state_27535[1]);if((state_val_27536 === 1))
{var inst_27506 = cljs.core.vec.call(null,chs);var inst_27507 = inst_27506;var state_27535__$1 = (function (){var statearr_27537 = state_27535;(statearr_27537[7] = inst_27507);
return statearr_27537;
})();var statearr_27538_28609 = state_27535__$1;(statearr_27538_28609[2] = null);
(statearr_27538_28609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 2))
{var inst_27507 = (state_27535[7]);var inst_27509 = cljs.core.count.call(null,inst_27507);var inst_27510 = (inst_27509 > 0);var state_27535__$1 = state_27535;if(cljs.core.truth_(inst_27510))
{var statearr_27539_28610 = state_27535__$1;(statearr_27539_28610[1] = 4);
} else
{var statearr_27540_28611 = state_27535__$1;(statearr_27540_28611[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 3))
{var inst_27533 = (state_27535[2]);var state_27535__$1 = state_27535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27535__$1,inst_27533);
} else
{if((state_val_27536 === 4))
{var inst_27507 = (state_27535[7]);var state_27535__$1 = state_27535;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27535__$1,7,inst_27507);
} else
{if((state_val_27536 === 5))
{var inst_27529 = cljs.core.async.close_BANG_.call(null,out);var state_27535__$1 = state_27535;var statearr_27541_28612 = state_27535__$1;(statearr_27541_28612[2] = inst_27529);
(statearr_27541_28612[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 6))
{var inst_27531 = (state_27535[2]);var state_27535__$1 = state_27535;var statearr_27542_28613 = state_27535__$1;(statearr_27542_28613[2] = inst_27531);
(statearr_27542_28613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 7))
{var inst_27515 = (state_27535[8]);var inst_27514 = (state_27535[9]);var inst_27514__$1 = (state_27535[2]);var inst_27515__$1 = cljs.core.nth.call(null,inst_27514__$1,0,null);var inst_27516 = cljs.core.nth.call(null,inst_27514__$1,1,null);var inst_27517 = (inst_27515__$1 == null);var state_27535__$1 = (function (){var statearr_27543 = state_27535;(statearr_27543[10] = inst_27516);
(statearr_27543[8] = inst_27515__$1);
(statearr_27543[9] = inst_27514__$1);
return statearr_27543;
})();if(cljs.core.truth_(inst_27517))
{var statearr_27544_28614 = state_27535__$1;(statearr_27544_28614[1] = 8);
} else
{var statearr_27545_28615 = state_27535__$1;(statearr_27545_28615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 8))
{var inst_27516 = (state_27535[10]);var inst_27515 = (state_27535[8]);var inst_27514 = (state_27535[9]);var inst_27507 = (state_27535[7]);var inst_27519 = (function (){var c = inst_27516;var v = inst_27515;var vec__27512 = inst_27514;var cs = inst_27507;return ((function (c,v,vec__27512,cs,inst_27516,inst_27515,inst_27514,inst_27507,state_val_27536,c__22463__auto___28608,out){
return (function (p1__27452_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27452_SHARP_);
});
;})(c,v,vec__27512,cs,inst_27516,inst_27515,inst_27514,inst_27507,state_val_27536,c__22463__auto___28608,out))
})();var inst_27520 = cljs.core.filterv.call(null,inst_27519,inst_27507);var inst_27507__$1 = inst_27520;var state_27535__$1 = (function (){var statearr_27546 = state_27535;(statearr_27546[7] = inst_27507__$1);
return statearr_27546;
})();var statearr_27547_28616 = state_27535__$1;(statearr_27547_28616[2] = null);
(statearr_27547_28616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 9))
{var inst_27515 = (state_27535[8]);var state_27535__$1 = state_27535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27535__$1,11,out,inst_27515);
} else
{if((state_val_27536 === 10))
{var inst_27527 = (state_27535[2]);var state_27535__$1 = state_27535;var statearr_27549_28617 = state_27535__$1;(statearr_27549_28617[2] = inst_27527);
(statearr_27549_28617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27536 === 11))
{var inst_27507 = (state_27535[7]);var inst_27524 = (state_27535[2]);var tmp27548 = inst_27507;var inst_27507__$1 = tmp27548;var state_27535__$1 = (function (){var statearr_27550 = state_27535;(statearr_27550[11] = inst_27524);
(statearr_27550[7] = inst_27507__$1);
return statearr_27550;
})();var statearr_27551_28618 = state_27535__$1;(statearr_27551_28618[2] = null);
(statearr_27551_28618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28608,out))
;return ((function (switch__22387__auto__,c__22463__auto___28608,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27555 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27555[0] = state_machine__22388__auto__);
(statearr_27555[1] = 1);
return statearr_27555;
});
var state_machine__22388__auto____1 = (function (state_27535){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27535);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27556){if((e27556 instanceof Object))
{var ex__22391__auto__ = e27556;var statearr_27557_28619 = state_27535;(statearr_27557_28619[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28620 = state_27535;
state_27535 = G__28620;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27535){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28608,out))
})();var state__22465__auto__ = (function (){var statearr_27558 = f__22464__auto__.call(null);(statearr_27558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28608);
return statearr_27558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28608,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28621,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28621,out){
return (function (state_27628){var state_val_27629 = (state_27628[1]);if((state_val_27629 === 1))
{var inst_27605 = 0;var state_27628__$1 = (function (){var statearr_27630 = state_27628;(statearr_27630[7] = inst_27605);
return statearr_27630;
})();var statearr_27631_28622 = state_27628__$1;(statearr_27631_28622[2] = null);
(statearr_27631_28622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 2))
{var inst_27605 = (state_27628[7]);var inst_27607 = (inst_27605 < n);var state_27628__$1 = state_27628;if(cljs.core.truth_(inst_27607))
{var statearr_27632_28623 = state_27628__$1;(statearr_27632_28623[1] = 4);
} else
{var statearr_27633_28624 = state_27628__$1;(statearr_27633_28624[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 3))
{var inst_27625 = (state_27628[2]);var inst_27626 = cljs.core.async.close_BANG_.call(null,out);var state_27628__$1 = (function (){var statearr_27634 = state_27628;(statearr_27634[8] = inst_27625);
return statearr_27634;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27628__$1,inst_27626);
} else
{if((state_val_27629 === 4))
{var state_27628__$1 = state_27628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27628__$1,7,ch);
} else
{if((state_val_27629 === 5))
{var state_27628__$1 = state_27628;var statearr_27635_28625 = state_27628__$1;(statearr_27635_28625[2] = null);
(statearr_27635_28625[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 6))
{var inst_27623 = (state_27628[2]);var state_27628__$1 = state_27628;var statearr_27636_28626 = state_27628__$1;(statearr_27636_28626[2] = inst_27623);
(statearr_27636_28626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 7))
{var inst_27610 = (state_27628[9]);var inst_27610__$1 = (state_27628[2]);var inst_27611 = (inst_27610__$1 == null);var inst_27612 = cljs.core.not.call(null,inst_27611);var state_27628__$1 = (function (){var statearr_27637 = state_27628;(statearr_27637[9] = inst_27610__$1);
return statearr_27637;
})();if(inst_27612)
{var statearr_27638_28627 = state_27628__$1;(statearr_27638_28627[1] = 8);
} else
{var statearr_27639_28628 = state_27628__$1;(statearr_27639_28628[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 8))
{var inst_27610 = (state_27628[9]);var state_27628__$1 = state_27628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27628__$1,11,out,inst_27610);
} else
{if((state_val_27629 === 9))
{var state_27628__$1 = state_27628;var statearr_27640_28629 = state_27628__$1;(statearr_27640_28629[2] = null);
(statearr_27640_28629[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 10))
{var inst_27620 = (state_27628[2]);var state_27628__$1 = state_27628;var statearr_27641_28630 = state_27628__$1;(statearr_27641_28630[2] = inst_27620);
(statearr_27641_28630[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27629 === 11))
{var inst_27605 = (state_27628[7]);var inst_27615 = (state_27628[2]);var inst_27616 = (inst_27605 + 1);var inst_27605__$1 = inst_27616;var state_27628__$1 = (function (){var statearr_27642 = state_27628;(statearr_27642[10] = inst_27615);
(statearr_27642[7] = inst_27605__$1);
return statearr_27642;
})();var statearr_27643_28631 = state_27628__$1;(statearr_27643_28631[2] = null);
(statearr_27643_28631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28621,out))
;return ((function (switch__22387__auto__,c__22463__auto___28621,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27647 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27647[0] = state_machine__22388__auto__);
(statearr_27647[1] = 1);
return statearr_27647;
});
var state_machine__22388__auto____1 = (function (state_27628){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27628);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27648){if((e27648 instanceof Object))
{var ex__22391__auto__ = e27648;var statearr_27649_28632 = state_27628;(statearr_27649_28632[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28633 = state_27628;
state_27628 = G__28633;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27628){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28621,out))
})();var state__22465__auto__ = (function (){var statearr_27650 = f__22464__auto__.call(null);(statearr_27650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28621);
return statearr_27650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28621,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27658 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27658 = (function (ch,f,map_LT_,meta27659){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27659 = meta27659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27658.cljs$lang$type = true;
cljs.core.async.t27658.cljs$lang$ctorStr = "cljs.core.async/t27658";
cljs.core.async.t27658.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27658");
});
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27661 = (function (fn1,_,meta27659,ch,f,map_LT_,meta27662){
this.fn1 = fn1;
this._ = _;
this.meta27659 = meta27659;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27662 = meta27662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27661.cljs$lang$type = true;
cljs.core.async.t27661.cljs$lang$ctorStr = "cljs.core.async/t27661";
cljs.core.async.t27661.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27661");
});})(___$1))
;
cljs.core.async.t27661.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27661.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27651_SHARP_){return f1.call(null,(((p1__27651_SHARP_ == null))?null:self__.f.call(null,p1__27651_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27663){var self__ = this;
var _27663__$1 = this;return self__.meta27662;
});})(___$1))
;
cljs.core.async.t27661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27663,meta27662__$1){var self__ = this;
var _27663__$1 = this;return (new cljs.core.async.t27661(self__.fn1,self__._,self__.meta27659,self__.ch,self__.f,self__.map_LT_,meta27662__$1));
});})(___$1))
;
cljs.core.async.__GT_t27661 = ((function (___$1){
return (function __GT_t27661(fn1__$1,___$2,meta27659__$1,ch__$2,f__$2,map_LT___$2,meta27662){return (new cljs.core.async.t27661(fn1__$1,___$2,meta27659__$1,ch__$2,f__$2,map_LT___$2,meta27662));
});})(___$1))
;
}
return (new cljs.core.async.t27661(fn1,___$1,self__.meta27659,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19791__auto__ = ret;if(cljs.core.truth_(and__19791__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19791__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27658.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27660){var self__ = this;
var _27660__$1 = this;return self__.meta27659;
});
cljs.core.async.t27658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27660,meta27659__$1){var self__ = this;
var _27660__$1 = this;return (new cljs.core.async.t27658(self__.ch,self__.f,self__.map_LT_,meta27659__$1));
});
cljs.core.async.__GT_t27658 = (function __GT_t27658(ch__$1,f__$1,map_LT___$1,meta27659){return (new cljs.core.async.t27658(ch__$1,f__$1,map_LT___$1,meta27659));
});
}
return (new cljs.core.async.t27658(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27667 = (function (ch,f,map_GT_,meta27668){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27668 = meta27668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27667.cljs$lang$type = true;
cljs.core.async.t27667.cljs$lang$ctorStr = "cljs.core.async/t27667";
cljs.core.async.t27667.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27667");
});
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27669){var self__ = this;
var _27669__$1 = this;return self__.meta27668;
});
cljs.core.async.t27667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27669,meta27668__$1){var self__ = this;
var _27669__$1 = this;return (new cljs.core.async.t27667(self__.ch,self__.f,self__.map_GT_,meta27668__$1));
});
cljs.core.async.__GT_t27667 = (function __GT_t27667(ch__$1,f__$1,map_GT___$1,meta27668){return (new cljs.core.async.t27667(ch__$1,f__$1,map_GT___$1,meta27668));
});
}
return (new cljs.core.async.t27667(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27673 = (function (ch,p,filter_GT_,meta27674){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27674 = meta27674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27673.cljs$lang$type = true;
cljs.core.async.t27673.cljs$lang$ctorStr = "cljs.core.async/t27673";
cljs.core.async.t27673.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27673");
});
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27675){var self__ = this;
var _27675__$1 = this;return self__.meta27674;
});
cljs.core.async.t27673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27675,meta27674__$1){var self__ = this;
var _27675__$1 = this;return (new cljs.core.async.t27673(self__.ch,self__.p,self__.filter_GT_,meta27674__$1));
});
cljs.core.async.__GT_t27673 = (function __GT_t27673(ch__$1,p__$1,filter_GT___$1,meta27674){return (new cljs.core.async.t27673(ch__$1,p__$1,filter_GT___$1,meta27674));
});
}
return (new cljs.core.async.t27673(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28634 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28634,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28634,out){
return (function (state_27737){var state_val_27738 = (state_27737[1]);if((state_val_27738 === 1))
{var state_27737__$1 = state_27737;var statearr_27739_28635 = state_27737__$1;(statearr_27739_28635[2] = null);
(statearr_27739_28635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 2))
{var state_27737__$1 = state_27737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27737__$1,4,ch);
} else
{if((state_val_27738 === 3))
{var inst_27735 = (state_27737[2]);var state_27737__$1 = state_27737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27737__$1,inst_27735);
} else
{if((state_val_27738 === 4))
{var inst_27719 = (state_27737[7]);var inst_27719__$1 = (state_27737[2]);var inst_27720 = (inst_27719__$1 == null);var state_27737__$1 = (function (){var statearr_27740 = state_27737;(statearr_27740[7] = inst_27719__$1);
return statearr_27740;
})();if(cljs.core.truth_(inst_27720))
{var statearr_27741_28636 = state_27737__$1;(statearr_27741_28636[1] = 5);
} else
{var statearr_27742_28637 = state_27737__$1;(statearr_27742_28637[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 5))
{var inst_27722 = cljs.core.async.close_BANG_.call(null,out);var state_27737__$1 = state_27737;var statearr_27743_28638 = state_27737__$1;(statearr_27743_28638[2] = inst_27722);
(statearr_27743_28638[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 6))
{var inst_27719 = (state_27737[7]);var inst_27724 = p.call(null,inst_27719);var state_27737__$1 = state_27737;if(cljs.core.truth_(inst_27724))
{var statearr_27744_28639 = state_27737__$1;(statearr_27744_28639[1] = 8);
} else
{var statearr_27745_28640 = state_27737__$1;(statearr_27745_28640[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 7))
{var inst_27733 = (state_27737[2]);var state_27737__$1 = state_27737;var statearr_27746_28641 = state_27737__$1;(statearr_27746_28641[2] = inst_27733);
(statearr_27746_28641[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 8))
{var inst_27719 = (state_27737[7]);var state_27737__$1 = state_27737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27737__$1,11,out,inst_27719);
} else
{if((state_val_27738 === 9))
{var state_27737__$1 = state_27737;var statearr_27747_28642 = state_27737__$1;(statearr_27747_28642[2] = null);
(statearr_27747_28642[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 10))
{var inst_27730 = (state_27737[2]);var state_27737__$1 = (function (){var statearr_27748 = state_27737;(statearr_27748[8] = inst_27730);
return statearr_27748;
})();var statearr_27749_28643 = state_27737__$1;(statearr_27749_28643[2] = null);
(statearr_27749_28643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27738 === 11))
{var inst_27727 = (state_27737[2]);var state_27737__$1 = state_27737;var statearr_27750_28644 = state_27737__$1;(statearr_27750_28644[2] = inst_27727);
(statearr_27750_28644[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28634,out))
;return ((function (switch__22387__auto__,c__22463__auto___28634,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27754 = [null,null,null,null,null,null,null,null,null];(statearr_27754[0] = state_machine__22388__auto__);
(statearr_27754[1] = 1);
return statearr_27754;
});
var state_machine__22388__auto____1 = (function (state_27737){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27737);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object))
{var ex__22391__auto__ = e27755;var statearr_27756_28645 = state_27737;(statearr_27756_28645[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28646 = state_27737;
state_27737 = G__28646;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27737){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28634,out))
})();var state__22465__auto__ = (function (){var statearr_27757 = f__22464__auto__.call(null);(statearr_27757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28634);
return statearr_27757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28634,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_27923){var state_val_27924 = (state_27923[1]);if((state_val_27924 === 1))
{var state_27923__$1 = state_27923;var statearr_27925_28647 = state_27923__$1;(statearr_27925_28647[2] = null);
(statearr_27925_28647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 2))
{var state_27923__$1 = state_27923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27923__$1,4,in$);
} else
{if((state_val_27924 === 3))
{var inst_27921 = (state_27923[2]);var state_27923__$1 = state_27923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27923__$1,inst_27921);
} else
{if((state_val_27924 === 4))
{var inst_27864 = (state_27923[7]);var inst_27864__$1 = (state_27923[2]);var inst_27865 = (inst_27864__$1 == null);var state_27923__$1 = (function (){var statearr_27926 = state_27923;(statearr_27926[7] = inst_27864__$1);
return statearr_27926;
})();if(cljs.core.truth_(inst_27865))
{var statearr_27927_28648 = state_27923__$1;(statearr_27927_28648[1] = 5);
} else
{var statearr_27928_28649 = state_27923__$1;(statearr_27928_28649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 5))
{var inst_27867 = cljs.core.async.close_BANG_.call(null,out);var state_27923__$1 = state_27923;var statearr_27929_28650 = state_27923__$1;(statearr_27929_28650[2] = inst_27867);
(statearr_27929_28650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 6))
{var inst_27864 = (state_27923[7]);var inst_27873 = f.call(null,inst_27864);var inst_27874 = cljs.core.seq.call(null,inst_27873);var inst_27875 = inst_27874;var inst_27876 = null;var inst_27877 = 0;var inst_27878 = 0;var state_27923__$1 = (function (){var statearr_27930 = state_27923;(statearr_27930[8] = inst_27878);
(statearr_27930[9] = inst_27877);
(statearr_27930[10] = inst_27876);
(statearr_27930[11] = inst_27875);
return statearr_27930;
})();var statearr_27931_28651 = state_27923__$1;(statearr_27931_28651[2] = null);
(statearr_27931_28651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 7))
{var inst_27919 = (state_27923[2]);var state_27923__$1 = state_27923;var statearr_27932_28652 = state_27923__$1;(statearr_27932_28652[2] = inst_27919);
(statearr_27932_28652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 8))
{var inst_27878 = (state_27923[8]);var inst_27877 = (state_27923[9]);var inst_27880 = (inst_27878 < inst_27877);var inst_27881 = inst_27880;var state_27923__$1 = state_27923;if(cljs.core.truth_(inst_27881))
{var statearr_27933_28653 = state_27923__$1;(statearr_27933_28653[1] = 10);
} else
{var statearr_27934_28654 = state_27923__$1;(statearr_27934_28654[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 9))
{var inst_27911 = (state_27923[2]);var inst_27912 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27923__$1 = (function (){var statearr_27935 = state_27923;(statearr_27935[12] = inst_27911);
return statearr_27935;
})();if(cljs.core.truth_(inst_27912))
{var statearr_27936_28655 = state_27923__$1;(statearr_27936_28655[1] = 21);
} else
{var statearr_27937_28656 = state_27923__$1;(statearr_27937_28656[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 10))
{var inst_27878 = (state_27923[8]);var inst_27876 = (state_27923[10]);var inst_27883 = cljs.core._nth.call(null,inst_27876,inst_27878);var state_27923__$1 = state_27923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27923__$1,13,out,inst_27883);
} else
{if((state_val_27924 === 11))
{var inst_27889 = (state_27923[13]);var inst_27875 = (state_27923[11]);var inst_27889__$1 = cljs.core.seq.call(null,inst_27875);var state_27923__$1 = (function (){var statearr_27941 = state_27923;(statearr_27941[13] = inst_27889__$1);
return statearr_27941;
})();if(inst_27889__$1)
{var statearr_27942_28657 = state_27923__$1;(statearr_27942_28657[1] = 14);
} else
{var statearr_27943_28658 = state_27923__$1;(statearr_27943_28658[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 12))
{var inst_27909 = (state_27923[2]);var state_27923__$1 = state_27923;var statearr_27944_28659 = state_27923__$1;(statearr_27944_28659[2] = inst_27909);
(statearr_27944_28659[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 13))
{var inst_27878 = (state_27923[8]);var inst_27877 = (state_27923[9]);var inst_27876 = (state_27923[10]);var inst_27875 = (state_27923[11]);var inst_27885 = (state_27923[2]);var inst_27886 = (inst_27878 + 1);var tmp27938 = inst_27877;var tmp27939 = inst_27876;var tmp27940 = inst_27875;var inst_27875__$1 = tmp27940;var inst_27876__$1 = tmp27939;var inst_27877__$1 = tmp27938;var inst_27878__$1 = inst_27886;var state_27923__$1 = (function (){var statearr_27945 = state_27923;(statearr_27945[14] = inst_27885);
(statearr_27945[8] = inst_27878__$1);
(statearr_27945[9] = inst_27877__$1);
(statearr_27945[10] = inst_27876__$1);
(statearr_27945[11] = inst_27875__$1);
return statearr_27945;
})();var statearr_27946_28660 = state_27923__$1;(statearr_27946_28660[2] = null);
(statearr_27946_28660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 14))
{var inst_27889 = (state_27923[13]);var inst_27891 = cljs.core.chunked_seq_QMARK_.call(null,inst_27889);var state_27923__$1 = state_27923;if(inst_27891)
{var statearr_27947_28661 = state_27923__$1;(statearr_27947_28661[1] = 17);
} else
{var statearr_27948_28662 = state_27923__$1;(statearr_27948_28662[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 15))
{var state_27923__$1 = state_27923;var statearr_27949_28663 = state_27923__$1;(statearr_27949_28663[2] = null);
(statearr_27949_28663[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 16))
{var inst_27907 = (state_27923[2]);var state_27923__$1 = state_27923;var statearr_27950_28664 = state_27923__$1;(statearr_27950_28664[2] = inst_27907);
(statearr_27950_28664[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 17))
{var inst_27889 = (state_27923[13]);var inst_27893 = cljs.core.chunk_first.call(null,inst_27889);var inst_27894 = cljs.core.chunk_rest.call(null,inst_27889);var inst_27895 = cljs.core.count.call(null,inst_27893);var inst_27875 = inst_27894;var inst_27876 = inst_27893;var inst_27877 = inst_27895;var inst_27878 = 0;var state_27923__$1 = (function (){var statearr_27951 = state_27923;(statearr_27951[8] = inst_27878);
(statearr_27951[9] = inst_27877);
(statearr_27951[10] = inst_27876);
(statearr_27951[11] = inst_27875);
return statearr_27951;
})();var statearr_27952_28665 = state_27923__$1;(statearr_27952_28665[2] = null);
(statearr_27952_28665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 18))
{var inst_27889 = (state_27923[13]);var inst_27898 = cljs.core.first.call(null,inst_27889);var state_27923__$1 = state_27923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27923__$1,20,out,inst_27898);
} else
{if((state_val_27924 === 19))
{var inst_27904 = (state_27923[2]);var state_27923__$1 = state_27923;var statearr_27953_28666 = state_27923__$1;(statearr_27953_28666[2] = inst_27904);
(statearr_27953_28666[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 20))
{var inst_27889 = (state_27923[13]);var inst_27900 = (state_27923[2]);var inst_27901 = cljs.core.next.call(null,inst_27889);var inst_27875 = inst_27901;var inst_27876 = null;var inst_27877 = 0;var inst_27878 = 0;var state_27923__$1 = (function (){var statearr_27954 = state_27923;(statearr_27954[8] = inst_27878);
(statearr_27954[9] = inst_27877);
(statearr_27954[10] = inst_27876);
(statearr_27954[11] = inst_27875);
(statearr_27954[15] = inst_27900);
return statearr_27954;
})();var statearr_27955_28667 = state_27923__$1;(statearr_27955_28667[2] = null);
(statearr_27955_28667[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 21))
{var state_27923__$1 = state_27923;var statearr_27956_28668 = state_27923__$1;(statearr_27956_28668[2] = null);
(statearr_27956_28668[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 22))
{var state_27923__$1 = state_27923;var statearr_27957_28669 = state_27923__$1;(statearr_27957_28669[2] = null);
(statearr_27957_28669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27924 === 23))
{var inst_27917 = (state_27923[2]);var state_27923__$1 = state_27923;var statearr_27958_28670 = state_27923__$1;(statearr_27958_28670[2] = inst_27917);
(statearr_27958_28670[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27962[0] = state_machine__22388__auto__);
(statearr_27962[1] = 1);
return statearr_27962;
});
var state_machine__22388__auto____1 = (function (state_27923){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27923);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27963){if((e27963 instanceof Object))
{var ex__22391__auto__ = e27963;var statearr_27964_28671 = state_27923;(statearr_27964_28671[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28672 = state_27923;
state_27923 = G__28672;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27923){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_27965 = f__22464__auto__.call(null);(statearr_27965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_27965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28673,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28673,out){
return (function (state_28037){var state_val_28038 = (state_28037[1]);if((state_val_28038 === 1))
{var inst_28014 = null;var state_28037__$1 = (function (){var statearr_28039 = state_28037;(statearr_28039[7] = inst_28014);
return statearr_28039;
})();var statearr_28040_28674 = state_28037__$1;(statearr_28040_28674[2] = null);
(statearr_28040_28674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 2))
{var state_28037__$1 = state_28037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28037__$1,4,ch);
} else
{if((state_val_28038 === 3))
{var inst_28034 = (state_28037[2]);var inst_28035 = cljs.core.async.close_BANG_.call(null,out);var state_28037__$1 = (function (){var statearr_28041 = state_28037;(statearr_28041[8] = inst_28034);
return statearr_28041;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28037__$1,inst_28035);
} else
{if((state_val_28038 === 4))
{var inst_28017 = (state_28037[9]);var inst_28017__$1 = (state_28037[2]);var inst_28018 = (inst_28017__$1 == null);var inst_28019 = cljs.core.not.call(null,inst_28018);var state_28037__$1 = (function (){var statearr_28042 = state_28037;(statearr_28042[9] = inst_28017__$1);
return statearr_28042;
})();if(inst_28019)
{var statearr_28043_28675 = state_28037__$1;(statearr_28043_28675[1] = 5);
} else
{var statearr_28044_28676 = state_28037__$1;(statearr_28044_28676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 5))
{var inst_28017 = (state_28037[9]);var inst_28014 = (state_28037[7]);var inst_28021 = cljs.core._EQ_.call(null,inst_28017,inst_28014);var state_28037__$1 = state_28037;if(inst_28021)
{var statearr_28045_28677 = state_28037__$1;(statearr_28045_28677[1] = 8);
} else
{var statearr_28046_28678 = state_28037__$1;(statearr_28046_28678[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 6))
{var state_28037__$1 = state_28037;var statearr_28048_28679 = state_28037__$1;(statearr_28048_28679[2] = null);
(statearr_28048_28679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 7))
{var inst_28032 = (state_28037[2]);var state_28037__$1 = state_28037;var statearr_28049_28680 = state_28037__$1;(statearr_28049_28680[2] = inst_28032);
(statearr_28049_28680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 8))
{var inst_28014 = (state_28037[7]);var tmp28047 = inst_28014;var inst_28014__$1 = tmp28047;var state_28037__$1 = (function (){var statearr_28050 = state_28037;(statearr_28050[7] = inst_28014__$1);
return statearr_28050;
})();var statearr_28051_28681 = state_28037__$1;(statearr_28051_28681[2] = null);
(statearr_28051_28681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 9))
{var inst_28017 = (state_28037[9]);var state_28037__$1 = state_28037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28037__$1,11,out,inst_28017);
} else
{if((state_val_28038 === 10))
{var inst_28029 = (state_28037[2]);var state_28037__$1 = state_28037;var statearr_28052_28682 = state_28037__$1;(statearr_28052_28682[2] = inst_28029);
(statearr_28052_28682[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28038 === 11))
{var inst_28017 = (state_28037[9]);var inst_28026 = (state_28037[2]);var inst_28014 = inst_28017;var state_28037__$1 = (function (){var statearr_28053 = state_28037;(statearr_28053[7] = inst_28014);
(statearr_28053[10] = inst_28026);
return statearr_28053;
})();var statearr_28054_28683 = state_28037__$1;(statearr_28054_28683[2] = null);
(statearr_28054_28683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28673,out))
;return ((function (switch__22387__auto__,c__22463__auto___28673,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28058 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28058[0] = state_machine__22388__auto__);
(statearr_28058[1] = 1);
return statearr_28058;
});
var state_machine__22388__auto____1 = (function (state_28037){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28037);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28059){if((e28059 instanceof Object))
{var ex__22391__auto__ = e28059;var statearr_28060_28684 = state_28037;(statearr_28060_28684[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28037);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28685 = state_28037;
state_28037 = G__28685;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28037){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28673,out))
})();var state__22465__auto__ = (function (){var statearr_28061 = f__22464__auto__.call(null);(statearr_28061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28673);
return statearr_28061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28673,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28686 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28686,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28686,out){
return (function (state_28166){var state_val_28167 = (state_28166[1]);if((state_val_28167 === 1))
{var inst_28129 = (new Array(n));var inst_28130 = inst_28129;var inst_28131 = 0;var state_28166__$1 = (function (){var statearr_28168 = state_28166;(statearr_28168[7] = inst_28131);
(statearr_28168[8] = inst_28130);
return statearr_28168;
})();var statearr_28169_28687 = state_28166__$1;(statearr_28169_28687[2] = null);
(statearr_28169_28687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 2))
{var state_28166__$1 = state_28166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,4,ch);
} else
{if((state_val_28167 === 3))
{var inst_28164 = (state_28166[2]);var state_28166__$1 = state_28166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28166__$1,inst_28164);
} else
{if((state_val_28167 === 4))
{var inst_28134 = (state_28166[9]);var inst_28134__$1 = (state_28166[2]);var inst_28135 = (inst_28134__$1 == null);var inst_28136 = cljs.core.not.call(null,inst_28135);var state_28166__$1 = (function (){var statearr_28170 = state_28166;(statearr_28170[9] = inst_28134__$1);
return statearr_28170;
})();if(inst_28136)
{var statearr_28171_28688 = state_28166__$1;(statearr_28171_28688[1] = 5);
} else
{var statearr_28172_28689 = state_28166__$1;(statearr_28172_28689[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 5))
{var inst_28139 = (state_28166[10]);var inst_28131 = (state_28166[7]);var inst_28134 = (state_28166[9]);var inst_28130 = (state_28166[8]);var inst_28138 = (inst_28130[inst_28131] = inst_28134);var inst_28139__$1 = (inst_28131 + 1);var inst_28140 = (inst_28139__$1 < n);var state_28166__$1 = (function (){var statearr_28173 = state_28166;(statearr_28173[10] = inst_28139__$1);
(statearr_28173[11] = inst_28138);
return statearr_28173;
})();if(cljs.core.truth_(inst_28140))
{var statearr_28174_28690 = state_28166__$1;(statearr_28174_28690[1] = 8);
} else
{var statearr_28175_28691 = state_28166__$1;(statearr_28175_28691[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 6))
{var inst_28131 = (state_28166[7]);var inst_28152 = (inst_28131 > 0);var state_28166__$1 = state_28166;if(cljs.core.truth_(inst_28152))
{var statearr_28177_28692 = state_28166__$1;(statearr_28177_28692[1] = 12);
} else
{var statearr_28178_28693 = state_28166__$1;(statearr_28178_28693[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 7))
{var inst_28162 = (state_28166[2]);var state_28166__$1 = state_28166;var statearr_28179_28694 = state_28166__$1;(statearr_28179_28694[2] = inst_28162);
(statearr_28179_28694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 8))
{var inst_28139 = (state_28166[10]);var inst_28130 = (state_28166[8]);var tmp28176 = inst_28130;var inst_28130__$1 = tmp28176;var inst_28131 = inst_28139;var state_28166__$1 = (function (){var statearr_28180 = state_28166;(statearr_28180[7] = inst_28131);
(statearr_28180[8] = inst_28130__$1);
return statearr_28180;
})();var statearr_28181_28695 = state_28166__$1;(statearr_28181_28695[2] = null);
(statearr_28181_28695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 9))
{var inst_28130 = (state_28166[8]);var inst_28144 = cljs.core.vec.call(null,inst_28130);var state_28166__$1 = state_28166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28166__$1,11,out,inst_28144);
} else
{if((state_val_28167 === 10))
{var inst_28150 = (state_28166[2]);var state_28166__$1 = state_28166;var statearr_28182_28696 = state_28166__$1;(statearr_28182_28696[2] = inst_28150);
(statearr_28182_28696[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 11))
{var inst_28146 = (state_28166[2]);var inst_28147 = (new Array(n));var inst_28130 = inst_28147;var inst_28131 = 0;var state_28166__$1 = (function (){var statearr_28183 = state_28166;(statearr_28183[7] = inst_28131);
(statearr_28183[12] = inst_28146);
(statearr_28183[8] = inst_28130);
return statearr_28183;
})();var statearr_28184_28697 = state_28166__$1;(statearr_28184_28697[2] = null);
(statearr_28184_28697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 12))
{var inst_28130 = (state_28166[8]);var inst_28154 = cljs.core.vec.call(null,inst_28130);var state_28166__$1 = state_28166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28166__$1,15,out,inst_28154);
} else
{if((state_val_28167 === 13))
{var state_28166__$1 = state_28166;var statearr_28185_28698 = state_28166__$1;(statearr_28185_28698[2] = null);
(statearr_28185_28698[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 14))
{var inst_28159 = (state_28166[2]);var inst_28160 = cljs.core.async.close_BANG_.call(null,out);var state_28166__$1 = (function (){var statearr_28186 = state_28166;(statearr_28186[13] = inst_28159);
return statearr_28186;
})();var statearr_28187_28699 = state_28166__$1;(statearr_28187_28699[2] = inst_28160);
(statearr_28187_28699[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28167 === 15))
{var inst_28156 = (state_28166[2]);var state_28166__$1 = state_28166;var statearr_28188_28700 = state_28166__$1;(statearr_28188_28700[2] = inst_28156);
(statearr_28188_28700[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28686,out))
;return ((function (switch__22387__auto__,c__22463__auto___28686,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28192[0] = state_machine__22388__auto__);
(statearr_28192[1] = 1);
return statearr_28192;
});
var state_machine__22388__auto____1 = (function (state_28166){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28166);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28193){if((e28193 instanceof Object))
{var ex__22391__auto__ = e28193;var statearr_28194_28701 = state_28166;(statearr_28194_28701[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28702 = state_28166;
state_28166 = G__28702;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28166){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28686,out))
})();var state__22465__auto__ = (function (){var statearr_28195 = f__22464__auto__.call(null);(statearr_28195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28686);
return statearr_28195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28686,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28703 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28703,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28703,out){
return (function (state_28308){var state_val_28309 = (state_28308[1]);if((state_val_28309 === 1))
{var inst_28267 = [];var inst_28268 = inst_28267;var inst_28269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28308__$1 = (function (){var statearr_28310 = state_28308;(statearr_28310[7] = inst_28269);
(statearr_28310[8] = inst_28268);
return statearr_28310;
})();var statearr_28311_28704 = state_28308__$1;(statearr_28311_28704[2] = null);
(statearr_28311_28704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 2))
{var state_28308__$1 = state_28308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28308__$1,4,ch);
} else
{if((state_val_28309 === 3))
{var inst_28306 = (state_28308[2]);var state_28308__$1 = state_28308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28308__$1,inst_28306);
} else
{if((state_val_28309 === 4))
{var inst_28272 = (state_28308[9]);var inst_28272__$1 = (state_28308[2]);var inst_28273 = (inst_28272__$1 == null);var inst_28274 = cljs.core.not.call(null,inst_28273);var state_28308__$1 = (function (){var statearr_28312 = state_28308;(statearr_28312[9] = inst_28272__$1);
return statearr_28312;
})();if(inst_28274)
{var statearr_28313_28705 = state_28308__$1;(statearr_28313_28705[1] = 5);
} else
{var statearr_28314_28706 = state_28308__$1;(statearr_28314_28706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 5))
{var inst_28272 = (state_28308[9]);var inst_28269 = (state_28308[7]);var inst_28276 = (state_28308[10]);var inst_28276__$1 = f.call(null,inst_28272);var inst_28277 = cljs.core._EQ_.call(null,inst_28276__$1,inst_28269);var inst_28278 = cljs.core.keyword_identical_QMARK_.call(null,inst_28269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28279 = (inst_28277) || (inst_28278);var state_28308__$1 = (function (){var statearr_28315 = state_28308;(statearr_28315[10] = inst_28276__$1);
return statearr_28315;
})();if(cljs.core.truth_(inst_28279))
{var statearr_28316_28707 = state_28308__$1;(statearr_28316_28707[1] = 8);
} else
{var statearr_28317_28708 = state_28308__$1;(statearr_28317_28708[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 6))
{var inst_28268 = (state_28308[8]);var inst_28293 = inst_28268.length;var inst_28294 = (inst_28293 > 0);var state_28308__$1 = state_28308;if(cljs.core.truth_(inst_28294))
{var statearr_28319_28709 = state_28308__$1;(statearr_28319_28709[1] = 12);
} else
{var statearr_28320_28710 = state_28308__$1;(statearr_28320_28710[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 7))
{var inst_28304 = (state_28308[2]);var state_28308__$1 = state_28308;var statearr_28321_28711 = state_28308__$1;(statearr_28321_28711[2] = inst_28304);
(statearr_28321_28711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 8))
{var inst_28272 = (state_28308[9]);var inst_28268 = (state_28308[8]);var inst_28276 = (state_28308[10]);var inst_28281 = inst_28268.push(inst_28272);var tmp28318 = inst_28268;var inst_28268__$1 = tmp28318;var inst_28269 = inst_28276;var state_28308__$1 = (function (){var statearr_28322 = state_28308;(statearr_28322[7] = inst_28269);
(statearr_28322[8] = inst_28268__$1);
(statearr_28322[11] = inst_28281);
return statearr_28322;
})();var statearr_28323_28712 = state_28308__$1;(statearr_28323_28712[2] = null);
(statearr_28323_28712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 9))
{var inst_28268 = (state_28308[8]);var inst_28284 = cljs.core.vec.call(null,inst_28268);var state_28308__$1 = state_28308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28308__$1,11,out,inst_28284);
} else
{if((state_val_28309 === 10))
{var inst_28291 = (state_28308[2]);var state_28308__$1 = state_28308;var statearr_28324_28713 = state_28308__$1;(statearr_28324_28713[2] = inst_28291);
(statearr_28324_28713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 11))
{var inst_28272 = (state_28308[9]);var inst_28276 = (state_28308[10]);var inst_28286 = (state_28308[2]);var inst_28287 = [];var inst_28288 = inst_28287.push(inst_28272);var inst_28268 = inst_28287;var inst_28269 = inst_28276;var state_28308__$1 = (function (){var statearr_28325 = state_28308;(statearr_28325[12] = inst_28286);
(statearr_28325[13] = inst_28288);
(statearr_28325[7] = inst_28269);
(statearr_28325[8] = inst_28268);
return statearr_28325;
})();var statearr_28326_28714 = state_28308__$1;(statearr_28326_28714[2] = null);
(statearr_28326_28714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 12))
{var inst_28268 = (state_28308[8]);var inst_28296 = cljs.core.vec.call(null,inst_28268);var state_28308__$1 = state_28308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28308__$1,15,out,inst_28296);
} else
{if((state_val_28309 === 13))
{var state_28308__$1 = state_28308;var statearr_28327_28715 = state_28308__$1;(statearr_28327_28715[2] = null);
(statearr_28327_28715[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 14))
{var inst_28301 = (state_28308[2]);var inst_28302 = cljs.core.async.close_BANG_.call(null,out);var state_28308__$1 = (function (){var statearr_28328 = state_28308;(statearr_28328[14] = inst_28301);
return statearr_28328;
})();var statearr_28329_28716 = state_28308__$1;(statearr_28329_28716[2] = inst_28302);
(statearr_28329_28716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28309 === 15))
{var inst_28298 = (state_28308[2]);var state_28308__$1 = state_28308;var statearr_28330_28717 = state_28308__$1;(statearr_28330_28717[2] = inst_28298);
(statearr_28330_28717[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28703,out))
;return ((function (switch__22387__auto__,c__22463__auto___28703,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28334[0] = state_machine__22388__auto__);
(statearr_28334[1] = 1);
return statearr_28334;
});
var state_machine__22388__auto____1 = (function (state_28308){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28308);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28335){if((e28335 instanceof Object))
{var ex__22391__auto__ = e28335;var statearr_28336_28718 = state_28308;(statearr_28336_28718[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28308);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28719 = state_28308;
state_28308 = G__28719;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28308){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28703,out))
})();var state__22465__auto__ = (function (){var statearr_28337 = f__22464__auto__.call(null);(statearr_28337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28703);
return statearr_28337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28703,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.example-linter')) {
goog.provide('lt.plugins.example_linter');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","whom-linter","lt.plugins.example-linter/whom-linter",4311094496),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","mark-whoms","lt.plugins.example-linter/mark-whoms",3770192170)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Whom text linter");
lt.plugins.example_linter.__BEH__dummy_validate = (function __BEH__dummy_validate(editor_text,callback){return callback.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),"Test error",new cljs.core.Keyword(null,"severity","severity",2492204655),"Warning",new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(1,0),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(6,20)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","dummy-validate","lt.plugins.example-linter/dummy-validate",4732581731),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__dummy_validate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.example-linter","validate","lt.plugins.example-linter/validate",2832052968),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.editor.lint')) {
goog.provide('lt.objs.editor.lint');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.thread');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.objs.editor.lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659));
lt.objs.editor.lint.default_timeout = 5000;
lt.objs.editor.lint.verify_linter_result = (function verify_linter_result(obj,res){if(cljs.core.vector_QMARK_.call(null,res))
{return res;
} else
{if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''),res);
} else
{return null;
}
}
}
});
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.objs.editor.lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (linter_objs){return (function (editor_text,callback,options){var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,ch){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,ch){
return (function (state_33215){var state_val_33216 = (state_33215[1]);if((state_val_33216 === 2))
{var inst_33213 = (state_33215[2]);var state_33215__$1 = state_33215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33215__$1,inst_33213);
} else
{if((state_val_33216 === 1))
{var state_33215__$1 = state_33215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33215__$1,2,ch,results);
} else
{return null;
}
}
});})(c__22463__auto__,ch))
;return ((function (switch__22387__auto__,c__22463__auto__,ch){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_33220 = [null,null,null,null,null,null,null];(statearr_33220[0] = state_machine__22388__auto__);
(statearr_33220[1] = 1);
return statearr_33220;
});
var state_machine__22388__auto____1 = (function (state_33215){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_33215);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e33221){if((e33221 instanceof Object))
{var ex__22391__auto__ = e33221;var statearr_33222_33298 = state_33215;(statearr_33222_33298[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33299 = state_33215;
state_33215 = G__33299;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_33215){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_33215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,ch))
})();var state__22465__auto__ = (function (){var statearr_33223 = f__22464__auto__.call(null);(statearr_33223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_33223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,ch))
);
return c__22463__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__33224_33300 = cljs.core.seq.call(null,validate_chans);var chunk__33225_33301 = null;var count__33226_33302 = 0;var i__33227_33303 = 0;while(true){
if((i__33227_33303 < count__33226_33302))
{var vec__33228_33304 = cljs.core._nth.call(null,chunk__33225_33301,i__33227_33303);var __33305 = cljs.core.nth.call(null,vec__33228_33304,0,null);var f_33306 = cljs.core.nth.call(null,vec__33228_33304,1,null);var obj_33307 = cljs.core.nth.call(null,vec__33228_33304,2,null);lt.object.raise.call(null,obj_33307,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_33306);
{
var G__33308 = seq__33224_33300;
var G__33309 = chunk__33225_33301;
var G__33310 = count__33226_33302;
var G__33311 = (i__33227_33303 + 1);
seq__33224_33300 = G__33308;
chunk__33225_33301 = G__33309;
count__33226_33302 = G__33310;
i__33227_33303 = G__33311;
continue;
}
} else
{var temp__4092__auto___33312 = cljs.core.seq.call(null,seq__33224_33300);if(temp__4092__auto___33312)
{var seq__33224_33313__$1 = temp__4092__auto___33312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33224_33313__$1))
{var c__20551__auto___33314 = cljs.core.chunk_first.call(null,seq__33224_33313__$1);{
var G__33315 = cljs.core.chunk_rest.call(null,seq__33224_33313__$1);
var G__33316 = c__20551__auto___33314;
var G__33317 = cljs.core.count.call(null,c__20551__auto___33314);
var G__33318 = 0;
seq__33224_33300 = G__33315;
chunk__33225_33301 = G__33316;
count__33226_33302 = G__33317;
i__33227_33303 = G__33318;
continue;
}
} else
{var vec__33229_33319 = cljs.core.first.call(null,seq__33224_33313__$1);var __33320 = cljs.core.nth.call(null,vec__33229_33319,0,null);var f_33321 = cljs.core.nth.call(null,vec__33229_33319,1,null);var obj_33322 = cljs.core.nth.call(null,vec__33229_33319,2,null);lt.object.raise.call(null,obj_33322,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_33321);
{
var G__33323 = cljs.core.next.call(null,seq__33224_33313__$1);
var G__33324 = null;
var G__33325 = 0;
var G__33326 = 0;
seq__33224_33300 = G__33323;
chunk__33225_33301 = G__33324;
count__33226_33302 = G__33325;
i__33227_33303 = G__33326;
continue;
}
}
} else
{}
}
break;
}
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,validate_chans){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,validate_chans){
return (function (state_33270){var state_val_33271 = (state_33270[1]);if((state_val_33271 === 1))
{var inst_33235 = cljs.core.nth.call(null,validate_chans,0,null);var inst_33236 = cljs.core.nth.call(null,inst_33235,0,null);var inst_33237 = cljs.core.nth.call(null,inst_33235,1,null);var inst_33238 = cljs.core.nth.call(null,inst_33235,2,null);var inst_33239 = cljs.core.nthnext.call(null,validate_chans,1);var inst_33240 = validate_chans;var inst_33241 = cljs.core.PersistentVector.EMPTY;var state_33270__$1 = (function (){var statearr_33272 = state_33270;(statearr_33272[7] = inst_33236);
(statearr_33272[8] = inst_33237);
(statearr_33272[9] = inst_33238);
(statearr_33272[10] = inst_33239);
(statearr_33272[11] = inst_33241);
(statearr_33272[12] = inst_33240);
return statearr_33272;
})();var statearr_33273_33327 = state_33270__$1;(statearr_33273_33327[2] = null);
(statearr_33273_33327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 2))
{var inst_33240 = (state_33270[12]);var inst_33245 = cljs.core.nth.call(null,inst_33240,0,null);var inst_33246 = cljs.core.nth.call(null,inst_33245,0,null);var inst_33247 = cljs.core.nth.call(null,inst_33245,1,null);var inst_33248 = cljs.core.nth.call(null,inst_33245,2,null);var inst_33249 = cljs.core.nthnext.call(null,inst_33240,1);var state_33270__$1 = (function (){var statearr_33274 = state_33270;(statearr_33274[13] = inst_33247);
(statearr_33274[14] = inst_33248);
(statearr_33274[15] = inst_33249);
return statearr_33274;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33270__$1,4,inst_33246);
} else
{if((state_val_33271 === 3))
{var inst_33268 = (state_33270[2]);var state_33270__$1 = state_33270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33270__$1,inst_33268);
} else
{if((state_val_33271 === 4))
{var inst_33252 = (state_33270[16]);var inst_33248 = (state_33270[14]);var inst_33251 = (state_33270[2]);var inst_33252__$1 = lt.objs.editor.lint.verify_linter_result.call(null,inst_33248,inst_33251);var state_33270__$1 = (function (){var statearr_33275 = state_33270;(statearr_33275[16] = inst_33252__$1);
return statearr_33275;
})();if(cljs.core.truth_(inst_33252__$1))
{var statearr_33276_33328 = state_33270__$1;(statearr_33276_33328[1] = 5);
} else
{var statearr_33277_33329 = state_33270__$1;(statearr_33277_33329[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 5))
{var inst_33241 = (state_33270[11]);var inst_33252 = (state_33270[16]);var inst_33254 = cljs.core.conj.call(null,inst_33241,inst_33252);var state_33270__$1 = state_33270;var statearr_33278_33330 = state_33270__$1;(statearr_33278_33330[2] = inst_33254);
(statearr_33278_33330[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 6))
{var inst_33241 = (state_33270[11]);var state_33270__$1 = state_33270;var statearr_33279_33331 = state_33270__$1;(statearr_33279_33331[2] = inst_33241);
(statearr_33279_33331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 7))
{var inst_33249 = (state_33270[15]);var inst_33257 = (state_33270[2]);var inst_33258 = cljs.core.seq.call(null,inst_33249);var state_33270__$1 = (function (){var statearr_33280 = state_33270;(statearr_33280[17] = inst_33257);
return statearr_33280;
})();if(inst_33258)
{var statearr_33281_33332 = state_33270__$1;(statearr_33281_33332[1] = 8);
} else
{var statearr_33282_33333 = state_33270__$1;(statearr_33282_33333[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 8))
{var inst_33257 = (state_33270[17]);var inst_33249 = (state_33270[15]);var inst_33240 = inst_33249;var inst_33241 = inst_33257;var state_33270__$1 = (function (){var statearr_33283 = state_33270;(statearr_33283[11] = inst_33241);
(statearr_33283[12] = inst_33240);
return statearr_33283;
})();var statearr_33284_33334 = state_33270__$1;(statearr_33284_33334[2] = null);
(statearr_33284_33334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 9))
{var inst_33257 = (state_33270[17]);var inst_33262 = cljs.core.apply.call(null,cljs.core.concat,inst_33257);var inst_33263 = cljs.core.clj__GT_js.call(null,inst_33262);var inst_33264 = callback.call(null,inst_33263);var state_33270__$1 = state_33270;var statearr_33285_33335 = state_33270__$1;(statearr_33285_33335[2] = inst_33264);
(statearr_33285_33335[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33271 === 10))
{var inst_33266 = (state_33270[2]);var state_33270__$1 = state_33270;var statearr_33286_33336 = state_33270__$1;(statearr_33286_33336[2] = inst_33266);
(statearr_33286_33336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__,validate_chans))
;return ((function (switch__22387__auto__,c__22463__auto__,validate_chans){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_33290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33290[0] = state_machine__22388__auto__);
(statearr_33290[1] = 1);
return statearr_33290;
});
var state_machine__22388__auto____1 = (function (state_33270){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_33270);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e33291){if((e33291 instanceof Object))
{var ex__22391__auto__ = e33291;var statearr_33292_33337 = state_33270;(statearr_33292_33337[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33338 = state_33270;
state_33270 = G__33338;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,validate_chans))
})();var state__22465__auto__ = (function (){var statearr_33293 = f__22464__auto__.call(null);(statearr_33293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_33293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,validate_chans))
);
return c__22463__auto__;
});
};
var validate_with_all_linters = function (var_args){
var linter_objs = null;if (arguments.length > 0) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return validate_with_all_linters__delegate.call(this,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 0;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__33339){
var linter_objs = cljs.core.seq(arglist__33339);
return validate_with_all_linters__delegate(linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.add_linter = (function add_linter(linters,linter_obj,args){if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__33294_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__33294_SHARP_)),linter_obj);
}),linters))))
{var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);return cljs.core.conj.call(null,linters,obj);
} else
{return linters;
}
});
lt.objs.editor.lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__33295){var vec__33297 = p__33295;var linter_obj = cljs.core.nth.call(null,vec__33297,0,null);var args = cljs.core.nthnext.call(null,vec__33297,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.objs.editor.lint.add_linter,linter_obj,args));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),{"getAnnotations": validator_fn, "async": true},new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.objs.editor.lint.__BEH__register_linter = (function __BEH__register_linter(this$,linter){return lt.objs.editor.lint.prepare_editor_for_linter.call(null,this$,linter);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.__BEH__register_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28764 = {};return obj28764;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj28766 = {};return obj28766;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj28768 = {};return obj28768;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj28770 = {};return obj28770;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj28772 = {};return obj28772;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28774 = {};return obj28774;
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
var G__28710 = (cnt + 1);
cnt = G__28710;
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
{var v_28711 = this$.pop();if(keep_QMARK_.call(null,v_28711))
{this$.unshift(v_28711);
} else
{}
{
var G__28712 = (x + 1);
x = G__28712;
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
var count_28760 = 0;while(true){
var m_28761 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28761 == null))
{} else
{m_28761.call(null);
if((count_28760 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28762 = (count_28760 + 1);
count_28760 = G__28762;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28716 = (function (val,box,meta28717){
this.val = val;
this.box = box;
this.meta28717 = meta28717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28716.cljs$lang$type = true;
cljs.core.async.impl.channels.t28716.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28716";
cljs.core.async.impl.channels.t28716.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28716");
});
cljs.core.async.impl.channels.t28716.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28718){var self__ = this;
var _28718__$1 = this;return self__.meta28717;
});
cljs.core.async.impl.channels.t28716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28718,meta28717__$1){var self__ = this;
var _28718__$1 = this;return (new cljs.core.async.impl.channels.t28716(self__.val,self__.box,meta28717__$1));
});
cljs.core.async.impl.channels.__GT_t28716 = (function __GT_t28716(val__$1,box__$1,meta28717){return (new cljs.core.async.impl.channels.t28716(val__$1,box__$1,meta28717));
});
}
return (new cljs.core.async.impl.channels.t28716(val,box,null));
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
cljs.core.async.impl.channels.MMC = (function (){var obj28720 = {};return obj28720;
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
var taker_28735 = self__.takes.pop();if((taker_28735 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28735))
{var take_cb_28736 = cljs.core.async.impl.protocols.commit.call(null,taker_28735);var val_28737 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28736,val_28737,taker_28735,this$__$1){
return (function (){return take_cb_28736.call(null,val_28737);
});})(take_cb_28736,val_28737,taker_28735,this$__$1))
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
{var putter_28738 = self__.puts.pop();if((putter_28738 == null))
{} else
{var put_handler_28739 = putter_28738.handler;var val_28740 = putter_28738.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28739))
{var put_cb_28741 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28739);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28741,put_handler_28739,val_28740,putter_28738,_,retval,this$__$1){
return (function (){return put_cb_28741.call(null,true);
});})(put_cb_28741,put_handler_28739,val_28740,putter_28738,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28740)))
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
{var taker_28742 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28742))
{var take_cb_28743 = cljs.core.async.impl.protocols.commit.call(null,taker_28742);var val_28744__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28743,val_28744__$1,taker_28742,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28743.call(null,val_28744__$1);
});})(take_cb_28743,val_28744__$1,taker_28742,done_QMARK_,closed__$1,this$__$1))
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
var putter_28745 = self__.puts.pop();if((putter_28745 == null))
{} else
{var put_handler_28746 = putter_28745.handler;var val_28747 = putter_28745.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28746))
{var put_cb_28748 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28746);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28748,put_handler_28746,val_28747,putter_28745,this$__$1){
return (function (){return put_cb_28748.call(null,true);
});})(put_cb_28748,put_handler_28746,val_28747,putter_28745,this$__$1))
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
var G__28749 = null;
var G__28749__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28723){var t = e28723;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28749__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28724){var t = e28724;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28749 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28749__1.call(this,buf__$1);
case 2:
return G__28749__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28749;
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
var G__28795 = (level + 1);
level = G__28795;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28796 = 0;while(true){
if((i_28796 < arr.length))
{(arr[i_28796] = null);
{
var G__28797 = (i_28796 + 1);
i_28796 = G__28797;
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
var G__28798 = x_SINGLEQUOTE_;
x__$1 = G__28798;
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
var G__28799 = x__$1;
var G__28800 = k;
var G__28801 = (level - 1);
var G__28802 = update;
x = G__28799;
k = G__28800;
level = G__28801;
update = G__28802;
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
{var i_28803 = (self__.level + 1);while(true){
if((i_28803 <= (new_level + 1)))
{(update[i_28803] = self__.header);
{
var G__28804 = (i_28803 + 1);
i_28803 = G__28804;
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
{var i_28805 = 0;while(true){
if((i_28805 <= self__.level))
{var links_28806 = (update[i_28805]).forward;if(((links_28806[i_28805]) === x__$1))
{(links_28806[i_28805] = (x__$1.forward[i_28805]));
{
var G__28807 = (i_28805 + 1);
i_28805 = G__28807;
continue;
}
} else
{{
var G__28808 = (i_28805 + 1);
i_28805 = G__28808;
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
var G__28809 = x_SINGLEQUOTE_;
x__$1 = G__28809;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28810 = nx;
var G__28811 = (level__$1 - 1);
x = G__28810;
level__$1 = G__28811;
continue;
}
} else
{{
var G__28812 = x;
var G__28813 = (level__$1 - 1);
x = G__28812;
level__$1 = G__28813;
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
var G__28814 = x_SINGLEQUOTE_;
x__$1 = G__28814;
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
var G__28815 = nx;
var G__28816 = (level__$1 - 1);
x = G__28815;
level__$1 = G__28816;
continue;
}
} else
{{
var G__28817 = x;
var G__28818 = (level__$1 - 1);
x = G__28817;
level__$1 = G__28818;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28640 = (function (f,fn_handler,meta28641){
this.f = f;
this.fn_handler = fn_handler;
this.meta28641 = meta28641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28640.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28640.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28640";
cljs.core.async.impl.ioc_helpers.t28640.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28640");
});
cljs.core.async.impl.ioc_helpers.t28640.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28642){var self__ = this;
var _28642__$1 = this;return self__.meta28641;
});
cljs.core.async.impl.ioc_helpers.t28640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28642,meta28641__$1){var self__ = this;
var _28642__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28640(self__.f,self__.fn_handler,meta28641__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28640 = (function __GT_t28640(f__$1,fn_handler__$1,meta28641){return (new cljs.core.async.impl.ioc_helpers.t28640(f__$1,fn_handler__$1,meta28641));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28640(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28644){if((e28644 instanceof Object))
{var ex = e28644;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28644;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28647_28690 = state;(statearr_28647_28690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28647_28690[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28648_28691 = state;(statearr_28648_28691[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28648_28691[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28651_28692 = state;(statearr_28651_28692[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28651_28692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28652_28693 = state;(statearr_28652_28693[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28652_28693[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28653){var map__28658 = p__28653;var map__28658__$1 = ((cljs.core.seq_QMARK_.call(null,map__28658))?cljs.core.apply.call(null,cljs.core.hash_map,map__28658):map__28658);var opts = map__28658__$1;var statearr_28659_28694 = state;(statearr_28659_28694[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28658,map__28658__$1,opts){
return (function (val){var statearr_28660_28695 = state;(statearr_28660_28695[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28658,map__28658__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28661_28696 = state;(statearr_28661_28696[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28653 = null;if (arguments.length > 3) {
  p__28653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28653);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28697){
var state = cljs.core.first(arglist__28697);
arglist__28697 = cljs.core.next(arglist__28697);
var cont_block = cljs.core.first(arglist__28697);
arglist__28697 = cljs.core.next(arglist__28697);
var ports = cljs.core.first(arglist__28697);
var p__28653 = cljs.core.rest(arglist__28697);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28653);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28663,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28663,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28663,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28663,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28663,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28663,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28663,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28662){var self__ = this;
var this__20396__auto____$1 = this;var pred__28665 = cljs.core.keyword_identical_QMARK_;var expr__28666 = k__20397__auto__;if(cljs.core.truth_(pred__28665.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28666)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28662,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28665.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28666)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28662,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28665.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28666)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28662,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28665.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28666)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28662,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28665.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28666)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28662,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28662),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28662){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28662,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28664){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28664),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28664),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28664),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28664),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28664),null,cljs.core.dissoc.call(null,G__28664,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28669 = state;(statearr_28669[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28669;
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
{var statearr_28675 = state;(statearr_28675[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28675[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28675[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28675;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28676_28698 = state;(statearr_28676_28698[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28699 = state;
state = G__28699;
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
{var statearr_28677 = state;(statearr_28677[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28677[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28677;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28678 = state;(statearr_28678[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28678[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28678;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28679 = state;(statearr_28679[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28679[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28679;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25558 = (function (f,fn_handler,meta25559){
this.f = f;
this.fn_handler = fn_handler;
this.meta25559 = meta25559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25558.cljs$lang$type = true;
cljs.core.async.t25558.cljs$lang$ctorStr = "cljs.core.async/t25558";
cljs.core.async.t25558.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25558");
});
cljs.core.async.t25558.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25560){var self__ = this;
var _25560__$1 = this;return self__.meta25559;
});
cljs.core.async.t25558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25560,meta25559__$1){var self__ = this;
var _25560__$1 = this;return (new cljs.core.async.t25558(self__.f,self__.fn_handler,meta25559__$1));
});
cljs.core.async.__GT_t25558 = (function __GT_t25558(f__$1,fn_handler__$1,meta25559){return (new cljs.core.async.t25558(f__$1,fn_handler__$1,meta25559));
});
}
return (new cljs.core.async.t25558(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25562 = buff;if(G__25562)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25562.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25562.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25562);
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
{var val_28265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28265);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28265,ret){
return (function (){return fn1.call(null,val_28265);
});})(val_28265,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28266 = n;var x_28267 = 0;while(true){
if((x_28267 < n__20651__auto___28266))
{(a[x_28267] = 0);
{
var G__28268 = (x_28267 + 1);
x_28267 = G__28268;
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
var G__28269 = (i + 1);
i = G__28269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25566 = (function (flag,alt_flag,meta25567){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25567 = meta25567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25566.cljs$lang$type = true;
cljs.core.async.t25566.cljs$lang$ctorStr = "cljs.core.async/t25566";
cljs.core.async.t25566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25566");
});})(flag))
;
cljs.core.async.t25566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25568){var self__ = this;
var _25568__$1 = this;return self__.meta25567;
});})(flag))
;
cljs.core.async.t25566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25568,meta25567__$1){var self__ = this;
var _25568__$1 = this;return (new cljs.core.async.t25566(self__.flag,self__.alt_flag,meta25567__$1));
});})(flag))
;
cljs.core.async.__GT_t25566 = ((function (flag){
return (function __GT_t25566(flag__$1,alt_flag__$1,meta25567){return (new cljs.core.async.t25566(flag__$1,alt_flag__$1,meta25567));
});})(flag))
;
}
return (new cljs.core.async.t25566(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25572 = (function (cb,flag,alt_handler,meta25573){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25572.cljs$lang$type = true;
cljs.core.async.t25572.cljs$lang$ctorStr = "cljs.core.async/t25572";
cljs.core.async.t25572.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25572");
});
cljs.core.async.t25572.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25574){var self__ = this;
var _25574__$1 = this;return self__.meta25573;
});
cljs.core.async.t25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25574,meta25573__$1){var self__ = this;
var _25574__$1 = this;return (new cljs.core.async.t25572(self__.cb,self__.flag,self__.alt_handler,meta25573__$1));
});
cljs.core.async.__GT_t25572 = (function __GT_t25572(cb__$1,flag__$1,alt_handler__$1,meta25573){return (new cljs.core.async.t25572(cb__$1,flag__$1,alt_handler__$1,meta25573));
});
}
return (new cljs.core.async.t25572(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25575_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25576_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25576_SHARP_,port], null));
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
var G__28270 = (i + 1);
i = G__28270;
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
var alts_BANG___delegate = function (ports,p__25577){var map__25579 = p__25577;var map__25579__$1 = ((cljs.core.seq_QMARK_.call(null,map__25579))?cljs.core.apply.call(null,cljs.core.hash_map,map__25579):map__25579);var opts = map__25579__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25577 = null;if (arguments.length > 1) {
  p__25577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25577);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28271){
var ports = cljs.core.first(arglist__28271);
var p__25577 = cljs.core.rest(arglist__28271);
return alts_BANG___delegate(ports,p__25577);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22577__auto___28272 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28272){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28272){
return (function (state_25650){var state_val_25651 = (state_25650[1]);if((state_val_25651 === 1))
{var state_25650__$1 = state_25650;var statearr_25652_28273 = state_25650__$1;(statearr_25652_28273[2] = null);
(statearr_25652_28273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 2))
{var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25650__$1,4,from);
} else
{if((state_val_25651 === 3))
{var inst_25648 = (state_25650[2]);var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25650__$1,inst_25648);
} else
{if((state_val_25651 === 4))
{var inst_25629 = (state_25650[7]);var inst_25629__$1 = (state_25650[2]);var inst_25630 = (inst_25629__$1 == null);var state_25650__$1 = (function (){var statearr_25653 = state_25650;(statearr_25653[7] = inst_25629__$1);
return statearr_25653;
})();if(cljs.core.truth_(inst_25630))
{var statearr_25654_28274 = state_25650__$1;(statearr_25654_28274[1] = 5);
} else
{var statearr_25655_28275 = state_25650__$1;(statearr_25655_28275[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 5))
{var state_25650__$1 = state_25650;if(cljs.core.truth_(close_QMARK_))
{var statearr_25656_28276 = state_25650__$1;(statearr_25656_28276[1] = 8);
} else
{var statearr_25657_28277 = state_25650__$1;(statearr_25657_28277[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 6))
{var inst_25629 = (state_25650[7]);var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25650__$1,11,to,inst_25629);
} else
{if((state_val_25651 === 7))
{var inst_25646 = (state_25650[2]);var state_25650__$1 = state_25650;var statearr_25658_28278 = state_25650__$1;(statearr_25658_28278[2] = inst_25646);
(statearr_25658_28278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 8))
{var inst_25633 = cljs.core.async.close_BANG_.call(null,to);var state_25650__$1 = state_25650;var statearr_25659_28279 = state_25650__$1;(statearr_25659_28279[2] = inst_25633);
(statearr_25659_28279[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 9))
{var state_25650__$1 = state_25650;var statearr_25660_28280 = state_25650__$1;(statearr_25660_28280[2] = null);
(statearr_25660_28280[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 10))
{var inst_25636 = (state_25650[2]);var state_25650__$1 = state_25650;var statearr_25661_28281 = state_25650__$1;(statearr_25661_28281[2] = inst_25636);
(statearr_25661_28281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 11))
{var inst_25639 = (state_25650[2]);var state_25650__$1 = state_25650;if(cljs.core.truth_(inst_25639))
{var statearr_25662_28282 = state_25650__$1;(statearr_25662_28282[1] = 12);
} else
{var statearr_25663_28283 = state_25650__$1;(statearr_25663_28283[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 12))
{var state_25650__$1 = state_25650;var statearr_25664_28284 = state_25650__$1;(statearr_25664_28284[2] = null);
(statearr_25664_28284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 13))
{var state_25650__$1 = state_25650;var statearr_25665_28285 = state_25650__$1;(statearr_25665_28285[2] = null);
(statearr_25665_28285[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 14))
{var inst_25644 = (state_25650[2]);var state_25650__$1 = state_25650;var statearr_25666_28286 = state_25650__$1;(statearr_25666_28286[2] = inst_25644);
(statearr_25666_28286[1] = 7);
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
});})(c__22577__auto___28272))
;return ((function (switch__22501__auto__,c__22577__auto___28272){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25670 = [null,null,null,null,null,null,null,null];(statearr_25670[0] = state_machine__22502__auto__);
(statearr_25670[1] = 1);
return statearr_25670;
});
var state_machine__22502__auto____1 = (function (state_25650){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25650);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object))
{var ex__22505__auto__ = e25671;var statearr_25672_28287 = state_25650;(statearr_25672_28287[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28288 = state_25650;
state_25650 = G__28288;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25650){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28272))
})();var state__22579__auto__ = (function (){var statearr_25673 = f__22578__auto__.call(null);(statearr_25673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28272);
return statearr_25673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28272))
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
return (function (p__25856){var vec__25857 = p__25856;var v = cljs.core.nth.call(null,vec__25857,0,null);var p = cljs.core.nth.call(null,vec__25857,1,null);var job = vec__25857;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22577__auto___28289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results){
return (function (state_25862){var state_val_25863 = (state_25862[1]);if((state_val_25863 === 2))
{var inst_25859 = (state_25862[2]);var inst_25860 = cljs.core.async.close_BANG_.call(null,res);var state_25862__$1 = (function (){var statearr_25864 = state_25862;(statearr_25864[7] = inst_25859);
return statearr_25864;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25862__$1,inst_25860);
} else
{if((state_val_25863 === 1))
{var state_25862__$1 = state_25862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25862__$1,2,res,v);
} else
{return null;
}
}
});})(c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results))
;return ((function (switch__22501__auto__,c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25868 = [null,null,null,null,null,null,null,null];(statearr_25868[0] = state_machine__22502__auto__);
(statearr_25868[1] = 1);
return statearr_25868;
});
var state_machine__22502__auto____1 = (function (state_25862){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25862);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25869){if((e25869 instanceof Object))
{var ex__22505__auto__ = e25869;var statearr_25870_28290 = state_25862;(statearr_25870_28290[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28291 = state_25862;
state_25862 = G__28291;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results))
})();var state__22579__auto__ = (function (){var statearr_25871 = f__22578__auto__.call(null);(statearr_25871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28289);
return statearr_25871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28289,res,vec__25857,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25872){var vec__25873 = p__25872;var v = cljs.core.nth.call(null,vec__25873,0,null);var p = cljs.core.nth.call(null,vec__25873,1,null);var job = vec__25873;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28292 = n;var __28293 = 0;while(true){
if((__28293 < n__20651__auto___28292))
{var G__25874_28294 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__25874_28294))
{var c__22577__auto___28295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28293,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28293,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function (state_25887){var state_val_25888 = (state_25887[1]);if((state_val_25888 === 7))
{var inst_25883 = (state_25887[2]);var state_25887__$1 = state_25887;var statearr_25889_28296 = state_25887__$1;(statearr_25889_28296[2] = inst_25883);
(statearr_25889_28296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25888 === 6))
{var state_25887__$1 = state_25887;var statearr_25890_28297 = state_25887__$1;(statearr_25890_28297[2] = null);
(statearr_25890_28297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25888 === 5))
{var state_25887__$1 = state_25887;var statearr_25891_28298 = state_25887__$1;(statearr_25891_28298[2] = null);
(statearr_25891_28298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25888 === 4))
{var inst_25877 = (state_25887[2]);var inst_25878 = async.call(null,inst_25877);var state_25887__$1 = state_25887;if(cljs.core.truth_(inst_25878))
{var statearr_25892_28299 = state_25887__$1;(statearr_25892_28299[1] = 5);
} else
{var statearr_25893_28300 = state_25887__$1;(statearr_25893_28300[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25888 === 3))
{var inst_25885 = (state_25887[2]);var state_25887__$1 = state_25887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25887__$1,inst_25885);
} else
{if((state_val_25888 === 2))
{var state_25887__$1 = state_25887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25887__$1,4,jobs);
} else
{if((state_val_25888 === 1))
{var state_25887__$1 = state_25887;var statearr_25894_28301 = state_25887__$1;(statearr_25894_28301[2] = null);
(statearr_25894_28301[1] = 2);
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
});})(__28293,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
;return ((function (__28293,switch__22501__auto__,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25898 = [null,null,null,null,null,null,null];(statearr_25898[0] = state_machine__22502__auto__);
(statearr_25898[1] = 1);
return statearr_25898;
});
var state_machine__22502__auto____1 = (function (state_25887){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25887);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object))
{var ex__22505__auto__ = e25899;var statearr_25900_28302 = state_25887;(statearr_25900_28302[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28303 = state_25887;
state_25887 = G__28303;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25887){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28293,switch__22501__auto__,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_25901 = f__22578__auto__.call(null);(statearr_25901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28295);
return statearr_25901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28293,c__22577__auto___28295,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__25874_28294))
{var c__22577__auto___28304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28293,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28293,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function (state_25914){var state_val_25915 = (state_25914[1]);if((state_val_25915 === 7))
{var inst_25910 = (state_25914[2]);var state_25914__$1 = state_25914;var statearr_25916_28305 = state_25914__$1;(statearr_25916_28305[2] = inst_25910);
(statearr_25916_28305[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25915 === 6))
{var state_25914__$1 = state_25914;var statearr_25917_28306 = state_25914__$1;(statearr_25917_28306[2] = null);
(statearr_25917_28306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25915 === 5))
{var state_25914__$1 = state_25914;var statearr_25918_28307 = state_25914__$1;(statearr_25918_28307[2] = null);
(statearr_25918_28307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25915 === 4))
{var inst_25904 = (state_25914[2]);var inst_25905 = process.call(null,inst_25904);var state_25914__$1 = state_25914;if(cljs.core.truth_(inst_25905))
{var statearr_25919_28308 = state_25914__$1;(statearr_25919_28308[1] = 5);
} else
{var statearr_25920_28309 = state_25914__$1;(statearr_25920_28309[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25915 === 3))
{var inst_25912 = (state_25914[2]);var state_25914__$1 = state_25914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25914__$1,inst_25912);
} else
{if((state_val_25915 === 2))
{var state_25914__$1 = state_25914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25914__$1,4,jobs);
} else
{if((state_val_25915 === 1))
{var state_25914__$1 = state_25914;var statearr_25921_28310 = state_25914__$1;(statearr_25921_28310[2] = null);
(statearr_25921_28310[1] = 2);
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
});})(__28293,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
;return ((function (__28293,switch__22501__auto__,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25925 = [null,null,null,null,null,null,null];(statearr_25925[0] = state_machine__22502__auto__);
(statearr_25925[1] = 1);
return statearr_25925;
});
var state_machine__22502__auto____1 = (function (state_25914){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25914);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25926){if((e25926 instanceof Object))
{var ex__22505__auto__ = e25926;var statearr_25927_28311 = state_25914;(statearr_25927_28311[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28312 = state_25914;
state_25914 = G__28312;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25914){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28293,switch__22501__auto__,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_25928 = f__22578__auto__.call(null);(statearr_25928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28304);
return statearr_25928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28293,c__22577__auto___28304,G__25874_28294,n__20651__auto___28292,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28313 = (__28293 + 1);
__28293 = G__28313;
continue;
}
} else
{}
break;
}
var c__22577__auto___28314 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28314,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28314,jobs,results,process,async){
return (function (state_25949){var state_val_25950 = (state_25949[1]);if((state_val_25950 === 9))
{var inst_25942 = (state_25949[2]);var state_25949__$1 = (function (){var statearr_25951 = state_25949;(statearr_25951[7] = inst_25942);
return statearr_25951;
})();var statearr_25952_28315 = state_25949__$1;(statearr_25952_28315[2] = null);
(statearr_25952_28315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25950 === 8))
{var inst_25936 = (state_25949[8]);var inst_25940 = (state_25949[2]);var state_25949__$1 = (function (){var statearr_25953 = state_25949;(statearr_25953[9] = inst_25940);
return statearr_25953;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25949__$1,9,results,inst_25936);
} else
{if((state_val_25950 === 7))
{var inst_25945 = (state_25949[2]);var state_25949__$1 = state_25949;var statearr_25954_28316 = state_25949__$1;(statearr_25954_28316[2] = inst_25945);
(statearr_25954_28316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25950 === 6))
{var inst_25931 = (state_25949[10]);var inst_25936 = (state_25949[8]);var inst_25936__$1 = cljs.core.async.chan.call(null,1);var inst_25937 = [inst_25931,inst_25936__$1];var inst_25938 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_25937,null));var state_25949__$1 = (function (){var statearr_25955 = state_25949;(statearr_25955[8] = inst_25936__$1);
return statearr_25955;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25949__$1,8,jobs,inst_25938);
} else
{if((state_val_25950 === 5))
{var inst_25934 = cljs.core.async.close_BANG_.call(null,jobs);var state_25949__$1 = state_25949;var statearr_25956_28317 = state_25949__$1;(statearr_25956_28317[2] = inst_25934);
(statearr_25956_28317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25950 === 4))
{var inst_25931 = (state_25949[10]);var inst_25931__$1 = (state_25949[2]);var inst_25932 = (inst_25931__$1 == null);var state_25949__$1 = (function (){var statearr_25957 = state_25949;(statearr_25957[10] = inst_25931__$1);
return statearr_25957;
})();if(cljs.core.truth_(inst_25932))
{var statearr_25958_28318 = state_25949__$1;(statearr_25958_28318[1] = 5);
} else
{var statearr_25959_28319 = state_25949__$1;(statearr_25959_28319[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25950 === 3))
{var inst_25947 = (state_25949[2]);var state_25949__$1 = state_25949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25949__$1,inst_25947);
} else
{if((state_val_25950 === 2))
{var state_25949__$1 = state_25949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25949__$1,4,from);
} else
{if((state_val_25950 === 1))
{var state_25949__$1 = state_25949;var statearr_25960_28320 = state_25949__$1;(statearr_25960_28320[2] = null);
(statearr_25960_28320[1] = 2);
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
});})(c__22577__auto___28314,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto___28314,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25964 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25964[0] = state_machine__22502__auto__);
(statearr_25964[1] = 1);
return statearr_25964;
});
var state_machine__22502__auto____1 = (function (state_25949){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25949);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25965){if((e25965 instanceof Object))
{var ex__22505__auto__ = e25965;var statearr_25966_28321 = state_25949;(statearr_25966_28321[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28322 = state_25949;
state_25949 = G__28322;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25949){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28314,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_25967 = f__22578__auto__.call(null);(statearr_25967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28314);
return statearr_25967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28314,jobs,results,process,async))
);
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,jobs,results,process,async){
return (function (state_26005){var state_val_26006 = (state_26005[1]);if((state_val_26006 === 1))
{var state_26005__$1 = state_26005;var statearr_26007_28323 = state_26005__$1;(statearr_26007_28323[2] = null);
(statearr_26007_28323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 2))
{var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26005__$1,4,results);
} else
{if((state_val_26006 === 3))
{var inst_26003 = (state_26005[2]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26005__$1,inst_26003);
} else
{if((state_val_26006 === 4))
{var inst_25970 = (state_26005[7]);var inst_25970__$1 = (state_26005[2]);var inst_25971 = (inst_25970__$1 == null);var state_26005__$1 = (function (){var statearr_26008 = state_26005;(statearr_26008[7] = inst_25970__$1);
return statearr_26008;
})();if(cljs.core.truth_(inst_25971))
{var statearr_26009_28324 = state_26005__$1;(statearr_26009_28324[1] = 5);
} else
{var statearr_26010_28325 = state_26005__$1;(statearr_26010_28325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 5))
{var state_26005__$1 = state_26005;if(cljs.core.truth_(close_QMARK_))
{var statearr_26011_28326 = state_26005__$1;(statearr_26011_28326[1] = 8);
} else
{var statearr_26012_28327 = state_26005__$1;(statearr_26012_28327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 6))
{var inst_25970 = (state_26005[7]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26005__$1,11,inst_25970);
} else
{if((state_val_26006 === 7))
{var inst_26001 = (state_26005[2]);var state_26005__$1 = state_26005;var statearr_26013_28328 = state_26005__$1;(statearr_26013_28328[2] = inst_26001);
(statearr_26013_28328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 8))
{var inst_25974 = cljs.core.async.close_BANG_.call(null,to);var state_26005__$1 = state_26005;var statearr_26014_28329 = state_26005__$1;(statearr_26014_28329[2] = inst_25974);
(statearr_26014_28329[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 9))
{var state_26005__$1 = state_26005;var statearr_26015_28330 = state_26005__$1;(statearr_26015_28330[2] = null);
(statearr_26015_28330[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 10))
{var inst_25977 = (state_26005[2]);var state_26005__$1 = state_26005;var statearr_26016_28331 = state_26005__$1;(statearr_26016_28331[2] = inst_25977);
(statearr_26016_28331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 11))
{var inst_25980 = (state_26005[2]);var state_26005__$1 = (function (){var statearr_26017 = state_26005;(statearr_26017[8] = inst_25980);
return statearr_26017;
})();var statearr_26018_28332 = state_26005__$1;(statearr_26018_28332[2] = null);
(statearr_26018_28332[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 12))
{var inst_25980 = (state_26005[8]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26005__$1,14,inst_25980);
} else
{if((state_val_26006 === 13))
{var inst_25998 = (state_26005[2]);var state_26005__$1 = (function (){var statearr_26019 = state_26005;(statearr_26019[9] = inst_25998);
return statearr_26019;
})();var statearr_26020_28333 = state_26005__$1;(statearr_26020_28333[2] = null);
(statearr_26020_28333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 14))
{var inst_25985 = (state_26005[10]);var inst_25983 = (state_26005[11]);var inst_25983__$1 = (state_26005[2]);var inst_25984 = (inst_25983__$1 == null);var inst_25985__$1 = cljs.core.not.call(null,inst_25984);var state_26005__$1 = (function (){var statearr_26021 = state_26005;(statearr_26021[10] = inst_25985__$1);
(statearr_26021[11] = inst_25983__$1);
return statearr_26021;
})();if(inst_25985__$1)
{var statearr_26022_28334 = state_26005__$1;(statearr_26022_28334[1] = 15);
} else
{var statearr_26023_28335 = state_26005__$1;(statearr_26023_28335[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 15))
{var inst_25983 = (state_26005[11]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26005__$1,18,to,inst_25983);
} else
{if((state_val_26006 === 16))
{var inst_25985 = (state_26005[10]);var state_26005__$1 = state_26005;var statearr_26024_28336 = state_26005__$1;(statearr_26024_28336[2] = inst_25985);
(statearr_26024_28336[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 17))
{var inst_25991 = (state_26005[2]);var state_26005__$1 = state_26005;if(cljs.core.truth_(inst_25991))
{var statearr_26025_28337 = state_26005__$1;(statearr_26025_28337[1] = 19);
} else
{var statearr_26026_28338 = state_26005__$1;(statearr_26026_28338[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 18))
{var inst_25988 = (state_26005[2]);var state_26005__$1 = state_26005;var statearr_26027_28339 = state_26005__$1;(statearr_26027_28339[2] = inst_25988);
(statearr_26027_28339[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 19))
{var state_26005__$1 = state_26005;var statearr_26028_28340 = state_26005__$1;(statearr_26028_28340[2] = null);
(statearr_26028_28340[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 20))
{var state_26005__$1 = state_26005;var statearr_26029_28341 = state_26005__$1;(statearr_26029_28341[2] = null);
(statearr_26029_28341[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26006 === 21))
{var inst_25996 = (state_26005[2]);var state_26005__$1 = state_26005;var statearr_26030_28342 = state_26005__$1;(statearr_26030_28342[2] = inst_25996);
(statearr_26030_28342[1] = 13);
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
});})(c__22577__auto__,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto__,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26034 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26034[0] = state_machine__22502__auto__);
(statearr_26034[1] = 1);
return statearr_26034;
});
var state_machine__22502__auto____1 = (function (state_26005){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26005);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26035){if((e26035 instanceof Object))
{var ex__22505__auto__ = e26035;var statearr_26036_28343 = state_26005;(statearr_26036_28343[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28344 = state_26005;
state_26005 = G__28344;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26005){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26037 = f__22578__auto__.call(null);(statearr_26037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,jobs,results,process,async))
);
return c__22577__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22577__auto___28345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28345,tc,fc){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28345,tc,fc){
return (function (state_26113){var state_val_26114 = (state_26113[1]);if((state_val_26114 === 1))
{var state_26113__$1 = state_26113;var statearr_26115_28346 = state_26113__$1;(statearr_26115_28346[2] = null);
(statearr_26115_28346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 2))
{var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26113__$1,4,ch);
} else
{if((state_val_26114 === 3))
{var inst_26111 = (state_26113[2]);var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26113__$1,inst_26111);
} else
{if((state_val_26114 === 4))
{var inst_26090 = (state_26113[7]);var inst_26090__$1 = (state_26113[2]);var inst_26091 = (inst_26090__$1 == null);var state_26113__$1 = (function (){var statearr_26116 = state_26113;(statearr_26116[7] = inst_26090__$1);
return statearr_26116;
})();if(cljs.core.truth_(inst_26091))
{var statearr_26117_28347 = state_26113__$1;(statearr_26117_28347[1] = 5);
} else
{var statearr_26118_28348 = state_26113__$1;(statearr_26118_28348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 5))
{var inst_26093 = cljs.core.async.close_BANG_.call(null,tc);var inst_26094 = cljs.core.async.close_BANG_.call(null,fc);var state_26113__$1 = (function (){var statearr_26119 = state_26113;(statearr_26119[8] = inst_26093);
return statearr_26119;
})();var statearr_26120_28349 = state_26113__$1;(statearr_26120_28349[2] = inst_26094);
(statearr_26120_28349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 6))
{var inst_26090 = (state_26113[7]);var inst_26096 = p.call(null,inst_26090);var state_26113__$1 = state_26113;if(cljs.core.truth_(inst_26096))
{var statearr_26121_28350 = state_26113__$1;(statearr_26121_28350[1] = 9);
} else
{var statearr_26122_28351 = state_26113__$1;(statearr_26122_28351[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 7))
{var inst_26109 = (state_26113[2]);var state_26113__$1 = state_26113;var statearr_26123_28352 = state_26113__$1;(statearr_26123_28352[2] = inst_26109);
(statearr_26123_28352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 8))
{var inst_26102 = (state_26113[2]);var state_26113__$1 = state_26113;if(cljs.core.truth_(inst_26102))
{var statearr_26124_28353 = state_26113__$1;(statearr_26124_28353[1] = 12);
} else
{var statearr_26125_28354 = state_26113__$1;(statearr_26125_28354[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 9))
{var state_26113__$1 = state_26113;var statearr_26126_28355 = state_26113__$1;(statearr_26126_28355[2] = tc);
(statearr_26126_28355[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 10))
{var state_26113__$1 = state_26113;var statearr_26127_28356 = state_26113__$1;(statearr_26127_28356[2] = fc);
(statearr_26127_28356[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 11))
{var inst_26090 = (state_26113[7]);var inst_26100 = (state_26113[2]);var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26113__$1,8,inst_26100,inst_26090);
} else
{if((state_val_26114 === 12))
{var state_26113__$1 = state_26113;var statearr_26128_28357 = state_26113__$1;(statearr_26128_28357[2] = null);
(statearr_26128_28357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 13))
{var state_26113__$1 = state_26113;var statearr_26129_28358 = state_26113__$1;(statearr_26129_28358[2] = null);
(statearr_26129_28358[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26114 === 14))
{var inst_26107 = (state_26113[2]);var state_26113__$1 = state_26113;var statearr_26130_28359 = state_26113__$1;(statearr_26130_28359[2] = inst_26107);
(statearr_26130_28359[1] = 7);
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
});})(c__22577__auto___28345,tc,fc))
;return ((function (switch__22501__auto__,c__22577__auto___28345,tc,fc){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26134 = [null,null,null,null,null,null,null,null,null];(statearr_26134[0] = state_machine__22502__auto__);
(statearr_26134[1] = 1);
return statearr_26134;
});
var state_machine__22502__auto____1 = (function (state_26113){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26113);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26135){if((e26135 instanceof Object))
{var ex__22505__auto__ = e26135;var statearr_26136_28360 = state_26113;(statearr_26136_28360[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28361 = state_26113;
state_26113 = G__28361;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26113){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28345,tc,fc))
})();var state__22579__auto__ = (function (){var statearr_26137 = f__22578__auto__.call(null);(statearr_26137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28345);
return statearr_26137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28345,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26184){var state_val_26185 = (state_26184[1]);if((state_val_26185 === 7))
{var inst_26180 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26186_28362 = state_26184__$1;(statearr_26186_28362[2] = inst_26180);
(statearr_26186_28362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 6))
{var inst_26170 = (state_26184[7]);var inst_26173 = (state_26184[8]);var inst_26177 = f.call(null,inst_26170,inst_26173);var inst_26170__$1 = inst_26177;var state_26184__$1 = (function (){var statearr_26187 = state_26184;(statearr_26187[7] = inst_26170__$1);
return statearr_26187;
})();var statearr_26188_28363 = state_26184__$1;(statearr_26188_28363[2] = null);
(statearr_26188_28363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 5))
{var inst_26170 = (state_26184[7]);var state_26184__$1 = state_26184;var statearr_26189_28364 = state_26184__$1;(statearr_26189_28364[2] = inst_26170);
(statearr_26189_28364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 4))
{var inst_26173 = (state_26184[8]);var inst_26173__$1 = (state_26184[2]);var inst_26174 = (inst_26173__$1 == null);var state_26184__$1 = (function (){var statearr_26190 = state_26184;(statearr_26190[8] = inst_26173__$1);
return statearr_26190;
})();if(cljs.core.truth_(inst_26174))
{var statearr_26191_28365 = state_26184__$1;(statearr_26191_28365[1] = 5);
} else
{var statearr_26192_28366 = state_26184__$1;(statearr_26192_28366[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 3))
{var inst_26182 = (state_26184[2]);var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26184__$1,inst_26182);
} else
{if((state_val_26185 === 2))
{var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26184__$1,4,ch);
} else
{if((state_val_26185 === 1))
{var inst_26170 = init;var state_26184__$1 = (function (){var statearr_26193 = state_26184;(statearr_26193[7] = inst_26170);
return statearr_26193;
})();var statearr_26194_28367 = state_26184__$1;(statearr_26194_28367[2] = null);
(statearr_26194_28367[1] = 2);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26198 = [null,null,null,null,null,null,null,null,null];(statearr_26198[0] = state_machine__22502__auto__);
(statearr_26198[1] = 1);
return statearr_26198;
});
var state_machine__22502__auto____1 = (function (state_26184){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26184);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object))
{var ex__22505__auto__ = e26199;var statearr_26200_28368 = state_26184;(statearr_26200_28368[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28369 = state_26184;
state_26184 = G__28369;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26201 = f__22578__auto__.call(null);(statearr_26201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26275){var state_val_26276 = (state_26275[1]);if((state_val_26276 === 1))
{var inst_26251 = cljs.core.seq.call(null,coll);var inst_26252 = inst_26251;var state_26275__$1 = (function (){var statearr_26277 = state_26275;(statearr_26277[7] = inst_26252);
return statearr_26277;
})();var statearr_26278_28370 = state_26275__$1;(statearr_26278_28370[2] = null);
(statearr_26278_28370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 2))
{var inst_26252 = (state_26275[7]);var state_26275__$1 = state_26275;if(cljs.core.truth_(inst_26252))
{var statearr_26279_28371 = state_26275__$1;(statearr_26279_28371[1] = 4);
} else
{var statearr_26280_28372 = state_26275__$1;(statearr_26280_28372[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 3))
{var inst_26273 = (state_26275[2]);var state_26275__$1 = state_26275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26275__$1,inst_26273);
} else
{if((state_val_26276 === 4))
{var inst_26252 = (state_26275[7]);var inst_26255 = cljs.core.first.call(null,inst_26252);var state_26275__$1 = state_26275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26275__$1,7,ch,inst_26255);
} else
{if((state_val_26276 === 5))
{var inst_26252 = (state_26275[7]);var state_26275__$1 = state_26275;var statearr_26281_28373 = state_26275__$1;(statearr_26281_28373[2] = inst_26252);
(statearr_26281_28373[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 6))
{var inst_26260 = (state_26275[2]);var state_26275__$1 = state_26275;if(cljs.core.truth_(inst_26260))
{var statearr_26282_28374 = state_26275__$1;(statearr_26282_28374[1] = 8);
} else
{var statearr_26283_28375 = state_26275__$1;(statearr_26283_28375[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 7))
{var inst_26257 = (state_26275[2]);var state_26275__$1 = state_26275;var statearr_26284_28376 = state_26275__$1;(statearr_26284_28376[2] = inst_26257);
(statearr_26284_28376[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 8))
{var inst_26252 = (state_26275[7]);var inst_26262 = cljs.core.next.call(null,inst_26252);var inst_26252__$1 = inst_26262;var state_26275__$1 = (function (){var statearr_26285 = state_26275;(statearr_26285[7] = inst_26252__$1);
return statearr_26285;
})();var statearr_26286_28377 = state_26275__$1;(statearr_26286_28377[2] = null);
(statearr_26286_28377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 9))
{var state_26275__$1 = state_26275;if(cljs.core.truth_(close_QMARK_))
{var statearr_26287_28378 = state_26275__$1;(statearr_26287_28378[1] = 11);
} else
{var statearr_26288_28379 = state_26275__$1;(statearr_26288_28379[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 10))
{var inst_26271 = (state_26275[2]);var state_26275__$1 = state_26275;var statearr_26289_28380 = state_26275__$1;(statearr_26289_28380[2] = inst_26271);
(statearr_26289_28380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 11))
{var inst_26266 = cljs.core.async.close_BANG_.call(null,ch);var state_26275__$1 = state_26275;var statearr_26290_28381 = state_26275__$1;(statearr_26290_28381[2] = inst_26266);
(statearr_26290_28381[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 12))
{var state_26275__$1 = state_26275;var statearr_26291_28382 = state_26275__$1;(statearr_26291_28382[2] = null);
(statearr_26291_28382[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26276 === 13))
{var inst_26269 = (state_26275[2]);var state_26275__$1 = state_26275;var statearr_26292_28383 = state_26275__$1;(statearr_26292_28383[2] = inst_26269);
(statearr_26292_28383[1] = 10);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26296 = [null,null,null,null,null,null,null,null];(statearr_26296[0] = state_machine__22502__auto__);
(statearr_26296[1] = 1);
return statearr_26296;
});
var state_machine__22502__auto____1 = (function (state_26275){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26275);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26297){if((e26297 instanceof Object))
{var ex__22505__auto__ = e26297;var statearr_26298_28384 = state_26275;(statearr_26298_28384[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28385 = state_26275;
state_26275 = G__28385;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26275){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26299 = f__22578__auto__.call(null);(statearr_26299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
cljs.core.async.Mux = (function (){var obj26301 = {};return obj26301;
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
cljs.core.async.Mult = (function (){var obj26303 = {};return obj26303;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26525 = (function (cs,ch,mult,meta26526){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26526 = meta26526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26525.cljs$lang$type = true;
cljs.core.async.t26525.cljs$lang$ctorStr = "cljs.core.async/t26525";
cljs.core.async.t26525.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26525");
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26525.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26527){var self__ = this;
var _26527__$1 = this;return self__.meta26526;
});})(cs))
;
cljs.core.async.t26525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26527,meta26526__$1){var self__ = this;
var _26527__$1 = this;return (new cljs.core.async.t26525(self__.cs,self__.ch,self__.mult,meta26526__$1));
});})(cs))
;
cljs.core.async.__GT_t26525 = ((function (cs){
return (function __GT_t26525(cs__$1,ch__$1,mult__$1,meta26526){return (new cljs.core.async.t26525(cs__$1,ch__$1,mult__$1,meta26526));
});})(cs))
;
}
return (new cljs.core.async.t26525(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22577__auto___28386 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28386,cs,m,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28386,cs,m,dchan,dctr,done){
return (function (state_26658){var state_val_26659 = (state_26658[1]);if((state_val_26659 === 32))
{var inst_26599 = (state_26658[7]);var inst_26598 = (state_26658[8]);var inst_26601 = (state_26658[9]);var inst_26600 = (state_26658[10]);var inst_26613 = (state_26658[2]);var inst_26614 = (inst_26601 + 1);var tmp26660 = inst_26599;var tmp26661 = inst_26598;var tmp26662 = inst_26600;var inst_26598__$1 = tmp26661;var inst_26599__$1 = tmp26660;var inst_26600__$1 = tmp26662;var inst_26601__$1 = inst_26614;var state_26658__$1 = (function (){var statearr_26663 = state_26658;(statearr_26663[7] = inst_26599__$1);
(statearr_26663[8] = inst_26598__$1);
(statearr_26663[11] = inst_26613);
(statearr_26663[9] = inst_26601__$1);
(statearr_26663[10] = inst_26600__$1);
return statearr_26663;
})();var statearr_26664_28387 = state_26658__$1;(statearr_26664_28387[2] = null);
(statearr_26664_28387[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 1))
{var state_26658__$1 = state_26658;var statearr_26665_28388 = state_26658__$1;(statearr_26665_28388[2] = null);
(statearr_26665_28388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 33))
{var inst_26617 = (state_26658[12]);var inst_26619 = cljs.core.chunked_seq_QMARK_.call(null,inst_26617);var state_26658__$1 = state_26658;if(inst_26619)
{var statearr_26666_28389 = state_26658__$1;(statearr_26666_28389[1] = 36);
} else
{var statearr_26667_28390 = state_26658__$1;(statearr_26667_28390[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 2))
{var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26658__$1,4,ch);
} else
{if((state_val_26659 === 34))
{var state_26658__$1 = state_26658;var statearr_26668_28391 = state_26658__$1;(statearr_26668_28391[2] = null);
(statearr_26668_28391[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 3))
{var inst_26656 = (state_26658[2]);var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26658__$1,inst_26656);
} else
{if((state_val_26659 === 35))
{var inst_26640 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26669_28392 = state_26658__$1;(statearr_26669_28392[2] = inst_26640);
(statearr_26669_28392[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 4))
{var inst_26530 = (state_26658[13]);var inst_26530__$1 = (state_26658[2]);var inst_26531 = (inst_26530__$1 == null);var state_26658__$1 = (function (){var statearr_26670 = state_26658;(statearr_26670[13] = inst_26530__$1);
return statearr_26670;
})();if(cljs.core.truth_(inst_26531))
{var statearr_26671_28393 = state_26658__$1;(statearr_26671_28393[1] = 5);
} else
{var statearr_26672_28394 = state_26658__$1;(statearr_26672_28394[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 36))
{var inst_26617 = (state_26658[12]);var inst_26621 = cljs.core.chunk_first.call(null,inst_26617);var inst_26622 = cljs.core.chunk_rest.call(null,inst_26617);var inst_26623 = cljs.core.count.call(null,inst_26621);var inst_26598 = inst_26622;var inst_26599 = inst_26621;var inst_26600 = inst_26623;var inst_26601 = 0;var state_26658__$1 = (function (){var statearr_26673 = state_26658;(statearr_26673[7] = inst_26599);
(statearr_26673[8] = inst_26598);
(statearr_26673[9] = inst_26601);
(statearr_26673[10] = inst_26600);
return statearr_26673;
})();var statearr_26674_28395 = state_26658__$1;(statearr_26674_28395[2] = null);
(statearr_26674_28395[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 5))
{var inst_26537 = cljs.core.deref.call(null,cs);var inst_26538 = cljs.core.seq.call(null,inst_26537);var inst_26539 = inst_26538;var inst_26540 = null;var inst_26541 = 0;var inst_26542 = 0;var state_26658__$1 = (function (){var statearr_26675 = state_26658;(statearr_26675[14] = inst_26542);
(statearr_26675[15] = inst_26540);
(statearr_26675[16] = inst_26541);
(statearr_26675[17] = inst_26539);
return statearr_26675;
})();var statearr_26676_28396 = state_26658__$1;(statearr_26676_28396[2] = null);
(statearr_26676_28396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 37))
{var inst_26626 = (state_26658[18]);var inst_26617 = (state_26658[12]);var inst_26530 = (state_26658[13]);var inst_26626__$1 = cljs.core.first.call(null,inst_26617);var inst_26627 = cljs.core.async.put_BANG_.call(null,inst_26626__$1,inst_26530,done);var state_26658__$1 = (function (){var statearr_26677 = state_26658;(statearr_26677[18] = inst_26626__$1);
return statearr_26677;
})();if(cljs.core.truth_(inst_26627))
{var statearr_26678_28397 = state_26658__$1;(statearr_26678_28397[1] = 39);
} else
{var statearr_26679_28398 = state_26658__$1;(statearr_26679_28398[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 6))
{var inst_26590 = (state_26658[19]);var inst_26589 = cljs.core.deref.call(null,cs);var inst_26590__$1 = cljs.core.keys.call(null,inst_26589);var inst_26591 = cljs.core.count.call(null,inst_26590__$1);var inst_26592 = cljs.core.reset_BANG_.call(null,dctr,inst_26591);var inst_26597 = cljs.core.seq.call(null,inst_26590__$1);var inst_26598 = inst_26597;var inst_26599 = null;var inst_26600 = 0;var inst_26601 = 0;var state_26658__$1 = (function (){var statearr_26680 = state_26658;(statearr_26680[7] = inst_26599);
(statearr_26680[8] = inst_26598);
(statearr_26680[20] = inst_26592);
(statearr_26680[19] = inst_26590__$1);
(statearr_26680[9] = inst_26601);
(statearr_26680[10] = inst_26600);
return statearr_26680;
})();var statearr_26681_28399 = state_26658__$1;(statearr_26681_28399[2] = null);
(statearr_26681_28399[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 38))
{var inst_26637 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26682_28400 = state_26658__$1;(statearr_26682_28400[2] = inst_26637);
(statearr_26682_28400[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 7))
{var inst_26654 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26683_28401 = state_26658__$1;(statearr_26683_28401[2] = inst_26654);
(statearr_26683_28401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 39))
{var state_26658__$1 = state_26658;var statearr_26684_28402 = state_26658__$1;(statearr_26684_28402[2] = null);
(statearr_26684_28402[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 8))
{var inst_26542 = (state_26658[14]);var inst_26541 = (state_26658[16]);var inst_26544 = (inst_26542 < inst_26541);var inst_26545 = inst_26544;var state_26658__$1 = state_26658;if(cljs.core.truth_(inst_26545))
{var statearr_26685_28403 = state_26658__$1;(statearr_26685_28403[1] = 10);
} else
{var statearr_26686_28404 = state_26658__$1;(statearr_26686_28404[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 40))
{var inst_26626 = (state_26658[18]);var inst_26630 = done.call(null,null);var inst_26631 = cljs.core.async.untap_STAR_.call(null,m,inst_26626);var state_26658__$1 = (function (){var statearr_26687 = state_26658;(statearr_26687[21] = inst_26630);
return statearr_26687;
})();var statearr_26688_28405 = state_26658__$1;(statearr_26688_28405[2] = inst_26631);
(statearr_26688_28405[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 9))
{var inst_26587 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26689_28406 = state_26658__$1;(statearr_26689_28406[2] = inst_26587);
(statearr_26689_28406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 41))
{var inst_26617 = (state_26658[12]);var inst_26633 = (state_26658[2]);var inst_26634 = cljs.core.next.call(null,inst_26617);var inst_26598 = inst_26634;var inst_26599 = null;var inst_26600 = 0;var inst_26601 = 0;var state_26658__$1 = (function (){var statearr_26690 = state_26658;(statearr_26690[22] = inst_26633);
(statearr_26690[7] = inst_26599);
(statearr_26690[8] = inst_26598);
(statearr_26690[9] = inst_26601);
(statearr_26690[10] = inst_26600);
return statearr_26690;
})();var statearr_26691_28407 = state_26658__$1;(statearr_26691_28407[2] = null);
(statearr_26691_28407[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 10))
{var inst_26542 = (state_26658[14]);var inst_26540 = (state_26658[15]);var inst_26548 = cljs.core._nth.call(null,inst_26540,inst_26542);var inst_26549 = cljs.core.nth.call(null,inst_26548,0,null);var inst_26550 = cljs.core.nth.call(null,inst_26548,1,null);var state_26658__$1 = (function (){var statearr_26692 = state_26658;(statearr_26692[23] = inst_26549);
return statearr_26692;
})();if(cljs.core.truth_(inst_26550))
{var statearr_26693_28408 = state_26658__$1;(statearr_26693_28408[1] = 13);
} else
{var statearr_26694_28409 = state_26658__$1;(statearr_26694_28409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 42))
{var state_26658__$1 = state_26658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26658__$1,45,dchan);
} else
{if((state_val_26659 === 11))
{var inst_26539 = (state_26658[17]);var inst_26559 = (state_26658[24]);var inst_26559__$1 = cljs.core.seq.call(null,inst_26539);var state_26658__$1 = (function (){var statearr_26695 = state_26658;(statearr_26695[24] = inst_26559__$1);
return statearr_26695;
})();if(inst_26559__$1)
{var statearr_26696_28410 = state_26658__$1;(statearr_26696_28410[1] = 16);
} else
{var statearr_26697_28411 = state_26658__$1;(statearr_26697_28411[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 43))
{var state_26658__$1 = state_26658;var statearr_26698_28412 = state_26658__$1;(statearr_26698_28412[2] = null);
(statearr_26698_28412[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 12))
{var inst_26585 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26699_28413 = state_26658__$1;(statearr_26699_28413[2] = inst_26585);
(statearr_26699_28413[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 44))
{var inst_26651 = (state_26658[2]);var state_26658__$1 = (function (){var statearr_26700 = state_26658;(statearr_26700[25] = inst_26651);
return statearr_26700;
})();var statearr_26701_28414 = state_26658__$1;(statearr_26701_28414[2] = null);
(statearr_26701_28414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 13))
{var inst_26549 = (state_26658[23]);var inst_26552 = cljs.core.async.close_BANG_.call(null,inst_26549);var state_26658__$1 = state_26658;var statearr_26702_28415 = state_26658__$1;(statearr_26702_28415[2] = inst_26552);
(statearr_26702_28415[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 45))
{var inst_26648 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26706_28416 = state_26658__$1;(statearr_26706_28416[2] = inst_26648);
(statearr_26706_28416[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 14))
{var state_26658__$1 = state_26658;var statearr_26707_28417 = state_26658__$1;(statearr_26707_28417[2] = null);
(statearr_26707_28417[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 15))
{var inst_26542 = (state_26658[14]);var inst_26540 = (state_26658[15]);var inst_26541 = (state_26658[16]);var inst_26539 = (state_26658[17]);var inst_26555 = (state_26658[2]);var inst_26556 = (inst_26542 + 1);var tmp26703 = inst_26540;var tmp26704 = inst_26541;var tmp26705 = inst_26539;var inst_26539__$1 = tmp26705;var inst_26540__$1 = tmp26703;var inst_26541__$1 = tmp26704;var inst_26542__$1 = inst_26556;var state_26658__$1 = (function (){var statearr_26708 = state_26658;(statearr_26708[14] = inst_26542__$1);
(statearr_26708[15] = inst_26540__$1);
(statearr_26708[16] = inst_26541__$1);
(statearr_26708[26] = inst_26555);
(statearr_26708[17] = inst_26539__$1);
return statearr_26708;
})();var statearr_26709_28418 = state_26658__$1;(statearr_26709_28418[2] = null);
(statearr_26709_28418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 16))
{var inst_26559 = (state_26658[24]);var inst_26561 = cljs.core.chunked_seq_QMARK_.call(null,inst_26559);var state_26658__$1 = state_26658;if(inst_26561)
{var statearr_26710_28419 = state_26658__$1;(statearr_26710_28419[1] = 19);
} else
{var statearr_26711_28420 = state_26658__$1;(statearr_26711_28420[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 17))
{var state_26658__$1 = state_26658;var statearr_26712_28421 = state_26658__$1;(statearr_26712_28421[2] = null);
(statearr_26712_28421[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 18))
{var inst_26583 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26713_28422 = state_26658__$1;(statearr_26713_28422[2] = inst_26583);
(statearr_26713_28422[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 19))
{var inst_26559 = (state_26658[24]);var inst_26563 = cljs.core.chunk_first.call(null,inst_26559);var inst_26564 = cljs.core.chunk_rest.call(null,inst_26559);var inst_26565 = cljs.core.count.call(null,inst_26563);var inst_26539 = inst_26564;var inst_26540 = inst_26563;var inst_26541 = inst_26565;var inst_26542 = 0;var state_26658__$1 = (function (){var statearr_26714 = state_26658;(statearr_26714[14] = inst_26542);
(statearr_26714[15] = inst_26540);
(statearr_26714[16] = inst_26541);
(statearr_26714[17] = inst_26539);
return statearr_26714;
})();var statearr_26715_28423 = state_26658__$1;(statearr_26715_28423[2] = null);
(statearr_26715_28423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 20))
{var inst_26559 = (state_26658[24]);var inst_26569 = cljs.core.first.call(null,inst_26559);var inst_26570 = cljs.core.nth.call(null,inst_26569,0,null);var inst_26571 = cljs.core.nth.call(null,inst_26569,1,null);var state_26658__$1 = (function (){var statearr_26716 = state_26658;(statearr_26716[27] = inst_26570);
return statearr_26716;
})();if(cljs.core.truth_(inst_26571))
{var statearr_26717_28424 = state_26658__$1;(statearr_26717_28424[1] = 22);
} else
{var statearr_26718_28425 = state_26658__$1;(statearr_26718_28425[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 21))
{var inst_26580 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26719_28426 = state_26658__$1;(statearr_26719_28426[2] = inst_26580);
(statearr_26719_28426[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 22))
{var inst_26570 = (state_26658[27]);var inst_26573 = cljs.core.async.close_BANG_.call(null,inst_26570);var state_26658__$1 = state_26658;var statearr_26720_28427 = state_26658__$1;(statearr_26720_28427[2] = inst_26573);
(statearr_26720_28427[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 23))
{var state_26658__$1 = state_26658;var statearr_26721_28428 = state_26658__$1;(statearr_26721_28428[2] = null);
(statearr_26721_28428[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 24))
{var inst_26559 = (state_26658[24]);var inst_26576 = (state_26658[2]);var inst_26577 = cljs.core.next.call(null,inst_26559);var inst_26539 = inst_26577;var inst_26540 = null;var inst_26541 = 0;var inst_26542 = 0;var state_26658__$1 = (function (){var statearr_26722 = state_26658;(statearr_26722[14] = inst_26542);
(statearr_26722[15] = inst_26540);
(statearr_26722[16] = inst_26541);
(statearr_26722[17] = inst_26539);
(statearr_26722[28] = inst_26576);
return statearr_26722;
})();var statearr_26723_28429 = state_26658__$1;(statearr_26723_28429[2] = null);
(statearr_26723_28429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 25))
{var inst_26601 = (state_26658[9]);var inst_26600 = (state_26658[10]);var inst_26603 = (inst_26601 < inst_26600);var inst_26604 = inst_26603;var state_26658__$1 = state_26658;if(cljs.core.truth_(inst_26604))
{var statearr_26724_28430 = state_26658__$1;(statearr_26724_28430[1] = 27);
} else
{var statearr_26725_28431 = state_26658__$1;(statearr_26725_28431[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 26))
{var inst_26590 = (state_26658[19]);var inst_26644 = (state_26658[2]);var inst_26645 = cljs.core.seq.call(null,inst_26590);var state_26658__$1 = (function (){var statearr_26726 = state_26658;(statearr_26726[29] = inst_26644);
return statearr_26726;
})();if(inst_26645)
{var statearr_26727_28432 = state_26658__$1;(statearr_26727_28432[1] = 42);
} else
{var statearr_26728_28433 = state_26658__$1;(statearr_26728_28433[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 27))
{var inst_26599 = (state_26658[7]);var inst_26606 = (state_26658[30]);var inst_26530 = (state_26658[13]);var inst_26601 = (state_26658[9]);var inst_26606__$1 = cljs.core._nth.call(null,inst_26599,inst_26601);var inst_26607 = cljs.core.async.put_BANG_.call(null,inst_26606__$1,inst_26530,done);var state_26658__$1 = (function (){var statearr_26729 = state_26658;(statearr_26729[30] = inst_26606__$1);
return statearr_26729;
})();if(cljs.core.truth_(inst_26607))
{var statearr_26730_28434 = state_26658__$1;(statearr_26730_28434[1] = 30);
} else
{var statearr_26731_28435 = state_26658__$1;(statearr_26731_28435[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 28))
{var inst_26598 = (state_26658[8]);var inst_26617 = (state_26658[12]);var inst_26617__$1 = cljs.core.seq.call(null,inst_26598);var state_26658__$1 = (function (){var statearr_26732 = state_26658;(statearr_26732[12] = inst_26617__$1);
return statearr_26732;
})();if(inst_26617__$1)
{var statearr_26733_28436 = state_26658__$1;(statearr_26733_28436[1] = 33);
} else
{var statearr_26734_28437 = state_26658__$1;(statearr_26734_28437[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 29))
{var inst_26642 = (state_26658[2]);var state_26658__$1 = state_26658;var statearr_26735_28438 = state_26658__$1;(statearr_26735_28438[2] = inst_26642);
(statearr_26735_28438[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 30))
{var state_26658__$1 = state_26658;var statearr_26736_28439 = state_26658__$1;(statearr_26736_28439[2] = null);
(statearr_26736_28439[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26659 === 31))
{var inst_26606 = (state_26658[30]);var inst_26610 = done.call(null,null);var inst_26611 = cljs.core.async.untap_STAR_.call(null,m,inst_26606);var state_26658__$1 = (function (){var statearr_26737 = state_26658;(statearr_26737[31] = inst_26610);
return statearr_26737;
})();var statearr_26738_28440 = state_26658__$1;(statearr_26738_28440[2] = inst_26611);
(statearr_26738_28440[1] = 32);
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
});})(c__22577__auto___28386,cs,m,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28386,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26742[0] = state_machine__22502__auto__);
(statearr_26742[1] = 1);
return statearr_26742;
});
var state_machine__22502__auto____1 = (function (state_26658){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26658);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26743){if((e26743 instanceof Object))
{var ex__22505__auto__ = e26743;var statearr_26744_28441 = state_26658;(statearr_26744_28441[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28442 = state_26658;
state_26658 = G__28442;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26658){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28386,cs,m,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_26745 = f__22578__auto__.call(null);(statearr_26745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28386);
return statearr_26745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28386,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26747 = {};return obj26747;
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
;var m = (function (){if(typeof cljs.core.async.t26867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26867 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26868){
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
this.meta26868 = meta26868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26867.cljs$lang$type = true;
cljs.core.async.t26867.cljs$lang$ctorStr = "cljs.core.async/t26867";
cljs.core.async.t26867.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26867");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26869){var self__ = this;
var _26869__$1 = this;return self__.meta26868;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26869,meta26868__$1){var self__ = this;
var _26869__$1 = this;return (new cljs.core.async.t26867(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26868__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26867 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26867(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26868){return (new cljs.core.async.t26867(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26868));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26867(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22577__auto___28443 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26939){var state_val_26940 = (state_26939[1]);if((state_val_26940 === 1))
{var inst_26873 = (state_26939[7]);var inst_26873__$1 = calc_state.call(null);var inst_26874 = cljs.core.seq_QMARK_.call(null,inst_26873__$1);var state_26939__$1 = (function (){var statearr_26941 = state_26939;(statearr_26941[7] = inst_26873__$1);
return statearr_26941;
})();if(inst_26874)
{var statearr_26942_28444 = state_26939__$1;(statearr_26942_28444[1] = 2);
} else
{var statearr_26943_28445 = state_26939__$1;(statearr_26943_28445[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 2))
{var inst_26873 = (state_26939[7]);var inst_26876 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26873);var state_26939__$1 = state_26939;var statearr_26944_28446 = state_26939__$1;(statearr_26944_28446[2] = inst_26876);
(statearr_26944_28446[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 3))
{var inst_26873 = (state_26939[7]);var state_26939__$1 = state_26939;var statearr_26945_28447 = state_26939__$1;(statearr_26945_28447[2] = inst_26873);
(statearr_26945_28447[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 4))
{var inst_26873 = (state_26939[7]);var inst_26879 = (state_26939[2]);var inst_26880 = cljs.core.get.call(null,inst_26879,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26881 = cljs.core.get.call(null,inst_26879,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26882 = cljs.core.get.call(null,inst_26879,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26883 = inst_26873;var state_26939__$1 = (function (){var statearr_26946 = state_26939;(statearr_26946[8] = inst_26883);
(statearr_26946[9] = inst_26881);
(statearr_26946[10] = inst_26882);
(statearr_26946[11] = inst_26880);
return statearr_26946;
})();var statearr_26947_28448 = state_26939__$1;(statearr_26947_28448[2] = null);
(statearr_26947_28448[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 5))
{var inst_26883 = (state_26939[8]);var inst_26886 = cljs.core.seq_QMARK_.call(null,inst_26883);var state_26939__$1 = state_26939;if(inst_26886)
{var statearr_26948_28449 = state_26939__$1;(statearr_26948_28449[1] = 7);
} else
{var statearr_26949_28450 = state_26939__$1;(statearr_26949_28450[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 6))
{var inst_26937 = (state_26939[2]);var state_26939__$1 = state_26939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26939__$1,inst_26937);
} else
{if((state_val_26940 === 7))
{var inst_26883 = (state_26939[8]);var inst_26888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26883);var state_26939__$1 = state_26939;var statearr_26950_28451 = state_26939__$1;(statearr_26950_28451[2] = inst_26888);
(statearr_26950_28451[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 8))
{var inst_26883 = (state_26939[8]);var state_26939__$1 = state_26939;var statearr_26951_28452 = state_26939__$1;(statearr_26951_28452[2] = inst_26883);
(statearr_26951_28452[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 9))
{var inst_26891 = (state_26939[12]);var inst_26891__$1 = (state_26939[2]);var inst_26892 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26893 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26894 = cljs.core.get.call(null,inst_26891__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26939__$1 = (function (){var statearr_26952 = state_26939;(statearr_26952[13] = inst_26894);
(statearr_26952[14] = inst_26893);
(statearr_26952[12] = inst_26891__$1);
return statearr_26952;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26939__$1,10,inst_26892);
} else
{if((state_val_26940 === 10))
{var inst_26899 = (state_26939[15]);var inst_26898 = (state_26939[16]);var inst_26897 = (state_26939[2]);var inst_26898__$1 = cljs.core.nth.call(null,inst_26897,0,null);var inst_26899__$1 = cljs.core.nth.call(null,inst_26897,1,null);var inst_26900 = (inst_26898__$1 == null);var inst_26901 = cljs.core._EQ_.call(null,inst_26899__$1,change);var inst_26902 = (inst_26900) || (inst_26901);var state_26939__$1 = (function (){var statearr_26953 = state_26939;(statearr_26953[15] = inst_26899__$1);
(statearr_26953[16] = inst_26898__$1);
return statearr_26953;
})();if(cljs.core.truth_(inst_26902))
{var statearr_26954_28453 = state_26939__$1;(statearr_26954_28453[1] = 11);
} else
{var statearr_26955_28454 = state_26939__$1;(statearr_26955_28454[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 11))
{var inst_26898 = (state_26939[16]);var inst_26904 = (inst_26898 == null);var state_26939__$1 = state_26939;if(cljs.core.truth_(inst_26904))
{var statearr_26956_28455 = state_26939__$1;(statearr_26956_28455[1] = 14);
} else
{var statearr_26957_28456 = state_26939__$1;(statearr_26957_28456[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 12))
{var inst_26899 = (state_26939[15]);var inst_26894 = (state_26939[13]);var inst_26913 = (state_26939[17]);var inst_26913__$1 = inst_26894.call(null,inst_26899);var state_26939__$1 = (function (){var statearr_26958 = state_26939;(statearr_26958[17] = inst_26913__$1);
return statearr_26958;
})();if(cljs.core.truth_(inst_26913__$1))
{var statearr_26959_28457 = state_26939__$1;(statearr_26959_28457[1] = 17);
} else
{var statearr_26960_28458 = state_26939__$1;(statearr_26960_28458[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 13))
{var inst_26935 = (state_26939[2]);var state_26939__$1 = state_26939;var statearr_26961_28459 = state_26939__$1;(statearr_26961_28459[2] = inst_26935);
(statearr_26961_28459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 14))
{var inst_26899 = (state_26939[15]);var inst_26906 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26899);var state_26939__$1 = state_26939;var statearr_26962_28460 = state_26939__$1;(statearr_26962_28460[2] = inst_26906);
(statearr_26962_28460[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 15))
{var state_26939__$1 = state_26939;var statearr_26963_28461 = state_26939__$1;(statearr_26963_28461[2] = null);
(statearr_26963_28461[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 16))
{var inst_26909 = (state_26939[2]);var inst_26910 = calc_state.call(null);var inst_26883 = inst_26910;var state_26939__$1 = (function (){var statearr_26964 = state_26939;(statearr_26964[8] = inst_26883);
(statearr_26964[18] = inst_26909);
return statearr_26964;
})();var statearr_26965_28462 = state_26939__$1;(statearr_26965_28462[2] = null);
(statearr_26965_28462[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 17))
{var inst_26913 = (state_26939[17]);var state_26939__$1 = state_26939;var statearr_26966_28463 = state_26939__$1;(statearr_26966_28463[2] = inst_26913);
(statearr_26966_28463[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 18))
{var inst_26899 = (state_26939[15]);var inst_26894 = (state_26939[13]);var inst_26893 = (state_26939[14]);var inst_26916 = cljs.core.empty_QMARK_.call(null,inst_26894);var inst_26917 = inst_26893.call(null,inst_26899);var inst_26918 = cljs.core.not.call(null,inst_26917);var inst_26919 = (inst_26916) && (inst_26918);var state_26939__$1 = state_26939;var statearr_26967_28464 = state_26939__$1;(statearr_26967_28464[2] = inst_26919);
(statearr_26967_28464[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 19))
{var inst_26921 = (state_26939[2]);var state_26939__$1 = state_26939;if(cljs.core.truth_(inst_26921))
{var statearr_26968_28465 = state_26939__$1;(statearr_26968_28465[1] = 20);
} else
{var statearr_26969_28466 = state_26939__$1;(statearr_26969_28466[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 20))
{var inst_26898 = (state_26939[16]);var state_26939__$1 = state_26939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26939__$1,23,out,inst_26898);
} else
{if((state_val_26940 === 21))
{var inst_26891 = (state_26939[12]);var inst_26883 = inst_26891;var state_26939__$1 = (function (){var statearr_26970 = state_26939;(statearr_26970[8] = inst_26883);
return statearr_26970;
})();var statearr_26971_28467 = state_26939__$1;(statearr_26971_28467[2] = null);
(statearr_26971_28467[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 22))
{var inst_26933 = (state_26939[2]);var state_26939__$1 = state_26939;var statearr_26972_28468 = state_26939__$1;(statearr_26972_28468[2] = inst_26933);
(statearr_26972_28468[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 23))
{var inst_26924 = (state_26939[2]);var state_26939__$1 = state_26939;if(cljs.core.truth_(inst_26924))
{var statearr_26973_28469 = state_26939__$1;(statearr_26973_28469[1] = 24);
} else
{var statearr_26974_28470 = state_26939__$1;(statearr_26974_28470[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 24))
{var inst_26891 = (state_26939[12]);var inst_26883 = inst_26891;var state_26939__$1 = (function (){var statearr_26975 = state_26939;(statearr_26975[8] = inst_26883);
return statearr_26975;
})();var statearr_26976_28471 = state_26939__$1;(statearr_26976_28471[2] = null);
(statearr_26976_28471[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 25))
{var state_26939__$1 = state_26939;var statearr_26977_28472 = state_26939__$1;(statearr_26977_28472[2] = null);
(statearr_26977_28472[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26940 === 26))
{var inst_26929 = (state_26939[2]);var state_26939__$1 = state_26939;var statearr_26978_28473 = state_26939__$1;(statearr_26978_28473[2] = inst_26929);
(statearr_26978_28473[1] = 22);
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
});})(c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22501__auto__,c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26982[0] = state_machine__22502__auto__);
(statearr_26982[1] = 1);
return statearr_26982;
});
var state_machine__22502__auto____1 = (function (state_26939){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26939);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26983){if((e26983 instanceof Object))
{var ex__22505__auto__ = e26983;var statearr_26984_28474 = state_26939;(statearr_26984_28474[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28475 = state_26939;
state_26939 = G__28475;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26939){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22579__auto__ = (function (){var statearr_26985 = f__22578__auto__.call(null);(statearr_26985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28443);
return statearr_26985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26987 = {};return obj26987;
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
return (function (p1__26988_SHARP_){if(cljs.core.truth_(p1__26988_SHARP_.call(null,topic)))
{return p1__26988_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26988_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27111 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27112){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27112 = meta27112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27111.cljs$lang$type = true;
cljs.core.async.t27111.cljs$lang$ctorStr = "cljs.core.async/t27111";
cljs.core.async.t27111.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27111");
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27111.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27113){var self__ = this;
var _27113__$1 = this;return self__.meta27112;
});})(mults,ensure_mult))
;
cljs.core.async.t27111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27113,meta27112__$1){var self__ = this;
var _27113__$1 = this;return (new cljs.core.async.t27111(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27112__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27111 = ((function (mults,ensure_mult){
return (function __GT_t27111(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27112){return (new cljs.core.async.t27111(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27112));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27111(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22577__auto___28476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28476,mults,ensure_mult,p){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28476,mults,ensure_mult,p){
return (function (state_27185){var state_val_27186 = (state_27185[1]);if((state_val_27186 === 1))
{var state_27185__$1 = state_27185;var statearr_27187_28477 = state_27185__$1;(statearr_27187_28477[2] = null);
(statearr_27187_28477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 2))
{var state_27185__$1 = state_27185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27185__$1,4,ch);
} else
{if((state_val_27186 === 3))
{var inst_27183 = (state_27185[2]);var state_27185__$1 = state_27185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27185__$1,inst_27183);
} else
{if((state_val_27186 === 4))
{var inst_27116 = (state_27185[7]);var inst_27116__$1 = (state_27185[2]);var inst_27117 = (inst_27116__$1 == null);var state_27185__$1 = (function (){var statearr_27188 = state_27185;(statearr_27188[7] = inst_27116__$1);
return statearr_27188;
})();if(cljs.core.truth_(inst_27117))
{var statearr_27189_28478 = state_27185__$1;(statearr_27189_28478[1] = 5);
} else
{var statearr_27190_28479 = state_27185__$1;(statearr_27190_28479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 5))
{var inst_27123 = cljs.core.deref.call(null,mults);var inst_27124 = cljs.core.vals.call(null,inst_27123);var inst_27125 = cljs.core.seq.call(null,inst_27124);var inst_27126 = inst_27125;var inst_27127 = null;var inst_27128 = 0;var inst_27129 = 0;var state_27185__$1 = (function (){var statearr_27191 = state_27185;(statearr_27191[8] = inst_27129);
(statearr_27191[9] = inst_27128);
(statearr_27191[10] = inst_27127);
(statearr_27191[11] = inst_27126);
return statearr_27191;
})();var statearr_27192_28480 = state_27185__$1;(statearr_27192_28480[2] = null);
(statearr_27192_28480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 6))
{var inst_27164 = (state_27185[12]);var inst_27166 = (state_27185[13]);var inst_27116 = (state_27185[7]);var inst_27164__$1 = topic_fn.call(null,inst_27116);var inst_27165 = cljs.core.deref.call(null,mults);var inst_27166__$1 = cljs.core.get.call(null,inst_27165,inst_27164__$1);var state_27185__$1 = (function (){var statearr_27193 = state_27185;(statearr_27193[12] = inst_27164__$1);
(statearr_27193[13] = inst_27166__$1);
return statearr_27193;
})();if(cljs.core.truth_(inst_27166__$1))
{var statearr_27194_28481 = state_27185__$1;(statearr_27194_28481[1] = 19);
} else
{var statearr_27195_28482 = state_27185__$1;(statearr_27195_28482[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 7))
{var inst_27181 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27196_28483 = state_27185__$1;(statearr_27196_28483[2] = inst_27181);
(statearr_27196_28483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 8))
{var inst_27129 = (state_27185[8]);var inst_27128 = (state_27185[9]);var inst_27131 = (inst_27129 < inst_27128);var inst_27132 = inst_27131;var state_27185__$1 = state_27185;if(cljs.core.truth_(inst_27132))
{var statearr_27200_28484 = state_27185__$1;(statearr_27200_28484[1] = 10);
} else
{var statearr_27201_28485 = state_27185__$1;(statearr_27201_28485[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 9))
{var inst_27162 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27202_28486 = state_27185__$1;(statearr_27202_28486[2] = inst_27162);
(statearr_27202_28486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 10))
{var inst_27129 = (state_27185[8]);var inst_27128 = (state_27185[9]);var inst_27127 = (state_27185[10]);var inst_27126 = (state_27185[11]);var inst_27134 = cljs.core._nth.call(null,inst_27127,inst_27129);var inst_27135 = cljs.core.async.muxch_STAR_.call(null,inst_27134);var inst_27136 = cljs.core.async.close_BANG_.call(null,inst_27135);var inst_27137 = (inst_27129 + 1);var tmp27197 = inst_27128;var tmp27198 = inst_27127;var tmp27199 = inst_27126;var inst_27126__$1 = tmp27199;var inst_27127__$1 = tmp27198;var inst_27128__$1 = tmp27197;var inst_27129__$1 = inst_27137;var state_27185__$1 = (function (){var statearr_27203 = state_27185;(statearr_27203[8] = inst_27129__$1);
(statearr_27203[9] = inst_27128__$1);
(statearr_27203[10] = inst_27127__$1);
(statearr_27203[11] = inst_27126__$1);
(statearr_27203[14] = inst_27136);
return statearr_27203;
})();var statearr_27204_28487 = state_27185__$1;(statearr_27204_28487[2] = null);
(statearr_27204_28487[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 11))
{var inst_27140 = (state_27185[15]);var inst_27126 = (state_27185[11]);var inst_27140__$1 = cljs.core.seq.call(null,inst_27126);var state_27185__$1 = (function (){var statearr_27205 = state_27185;(statearr_27205[15] = inst_27140__$1);
return statearr_27205;
})();if(inst_27140__$1)
{var statearr_27206_28488 = state_27185__$1;(statearr_27206_28488[1] = 13);
} else
{var statearr_27207_28489 = state_27185__$1;(statearr_27207_28489[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 12))
{var inst_27160 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27208_28490 = state_27185__$1;(statearr_27208_28490[2] = inst_27160);
(statearr_27208_28490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 13))
{var inst_27140 = (state_27185[15]);var inst_27142 = cljs.core.chunked_seq_QMARK_.call(null,inst_27140);var state_27185__$1 = state_27185;if(inst_27142)
{var statearr_27209_28491 = state_27185__$1;(statearr_27209_28491[1] = 16);
} else
{var statearr_27210_28492 = state_27185__$1;(statearr_27210_28492[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 14))
{var state_27185__$1 = state_27185;var statearr_27211_28493 = state_27185__$1;(statearr_27211_28493[2] = null);
(statearr_27211_28493[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 15))
{var inst_27158 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27212_28494 = state_27185__$1;(statearr_27212_28494[2] = inst_27158);
(statearr_27212_28494[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 16))
{var inst_27140 = (state_27185[15]);var inst_27144 = cljs.core.chunk_first.call(null,inst_27140);var inst_27145 = cljs.core.chunk_rest.call(null,inst_27140);var inst_27146 = cljs.core.count.call(null,inst_27144);var inst_27126 = inst_27145;var inst_27127 = inst_27144;var inst_27128 = inst_27146;var inst_27129 = 0;var state_27185__$1 = (function (){var statearr_27213 = state_27185;(statearr_27213[8] = inst_27129);
(statearr_27213[9] = inst_27128);
(statearr_27213[10] = inst_27127);
(statearr_27213[11] = inst_27126);
return statearr_27213;
})();var statearr_27214_28495 = state_27185__$1;(statearr_27214_28495[2] = null);
(statearr_27214_28495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 17))
{var inst_27140 = (state_27185[15]);var inst_27149 = cljs.core.first.call(null,inst_27140);var inst_27150 = cljs.core.async.muxch_STAR_.call(null,inst_27149);var inst_27151 = cljs.core.async.close_BANG_.call(null,inst_27150);var inst_27152 = cljs.core.next.call(null,inst_27140);var inst_27126 = inst_27152;var inst_27127 = null;var inst_27128 = 0;var inst_27129 = 0;var state_27185__$1 = (function (){var statearr_27215 = state_27185;(statearr_27215[8] = inst_27129);
(statearr_27215[9] = inst_27128);
(statearr_27215[10] = inst_27127);
(statearr_27215[11] = inst_27126);
(statearr_27215[16] = inst_27151);
return statearr_27215;
})();var statearr_27216_28496 = state_27185__$1;(statearr_27216_28496[2] = null);
(statearr_27216_28496[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 18))
{var inst_27155 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27217_28497 = state_27185__$1;(statearr_27217_28497[2] = inst_27155);
(statearr_27217_28497[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 19))
{var inst_27166 = (state_27185[13]);var inst_27116 = (state_27185[7]);var inst_27168 = cljs.core.async.muxch_STAR_.call(null,inst_27166);var state_27185__$1 = state_27185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27185__$1,22,inst_27168,inst_27116);
} else
{if((state_val_27186 === 20))
{var state_27185__$1 = state_27185;var statearr_27218_28498 = state_27185__$1;(statearr_27218_28498[2] = null);
(statearr_27218_28498[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 21))
{var inst_27178 = (state_27185[2]);var state_27185__$1 = (function (){var statearr_27219 = state_27185;(statearr_27219[17] = inst_27178);
return statearr_27219;
})();var statearr_27220_28499 = state_27185__$1;(statearr_27220_28499[2] = null);
(statearr_27220_28499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 22))
{var inst_27170 = (state_27185[2]);var state_27185__$1 = state_27185;if(cljs.core.truth_(inst_27170))
{var statearr_27221_28500 = state_27185__$1;(statearr_27221_28500[1] = 23);
} else
{var statearr_27222_28501 = state_27185__$1;(statearr_27222_28501[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 23))
{var state_27185__$1 = state_27185;var statearr_27223_28502 = state_27185__$1;(statearr_27223_28502[2] = null);
(statearr_27223_28502[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 24))
{var inst_27164 = (state_27185[12]);var inst_27173 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27164);var state_27185__$1 = state_27185;var statearr_27224_28503 = state_27185__$1;(statearr_27224_28503[2] = inst_27173);
(statearr_27224_28503[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27186 === 25))
{var inst_27175 = (state_27185[2]);var state_27185__$1 = state_27185;var statearr_27225_28504 = state_27185__$1;(statearr_27225_28504[2] = inst_27175);
(statearr_27225_28504[1] = 21);
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
});})(c__22577__auto___28476,mults,ensure_mult,p))
;return ((function (switch__22501__auto__,c__22577__auto___28476,mults,ensure_mult,p){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27229[0] = state_machine__22502__auto__);
(statearr_27229[1] = 1);
return statearr_27229;
});
var state_machine__22502__auto____1 = (function (state_27185){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27185);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27230){if((e27230 instanceof Object))
{var ex__22505__auto__ = e27230;var statearr_27231_28505 = state_27185;(statearr_27231_28505[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28506 = state_27185;
state_27185 = G__28506;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27185){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28476,mults,ensure_mult,p))
})();var state__22579__auto__ = (function (){var statearr_27232 = f__22578__auto__.call(null);(statearr_27232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28476);
return statearr_27232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28476,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__22577__auto___28507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27339){var state_val_27340 = (state_27339[1]);if((state_val_27340 === 1))
{var state_27339__$1 = state_27339;var statearr_27341_28508 = state_27339__$1;(statearr_27341_28508[2] = null);
(statearr_27341_28508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 2))
{var inst_27302 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27303 = 0;var state_27339__$1 = (function (){var statearr_27342 = state_27339;(statearr_27342[7] = inst_27303);
(statearr_27342[8] = inst_27302);
return statearr_27342;
})();var statearr_27343_28509 = state_27339__$1;(statearr_27343_28509[2] = null);
(statearr_27343_28509[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 3))
{var inst_27337 = (state_27339[2]);var state_27339__$1 = state_27339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else
{if((state_val_27340 === 4))
{var inst_27303 = (state_27339[7]);var inst_27305 = (inst_27303 < cnt);var state_27339__$1 = state_27339;if(cljs.core.truth_(inst_27305))
{var statearr_27344_28510 = state_27339__$1;(statearr_27344_28510[1] = 6);
} else
{var statearr_27345_28511 = state_27339__$1;(statearr_27345_28511[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 5))
{var inst_27323 = (state_27339[2]);var state_27339__$1 = (function (){var statearr_27346 = state_27339;(statearr_27346[9] = inst_27323);
return statearr_27346;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27339__$1,12,dchan);
} else
{if((state_val_27340 === 6))
{var state_27339__$1 = state_27339;var statearr_27347_28512 = state_27339__$1;(statearr_27347_28512[2] = null);
(statearr_27347_28512[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 7))
{var state_27339__$1 = state_27339;var statearr_27348_28513 = state_27339__$1;(statearr_27348_28513[2] = null);
(statearr_27348_28513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 8))
{var inst_27321 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27349_28514 = state_27339__$1;(statearr_27349_28514[2] = inst_27321);
(statearr_27349_28514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 9))
{var inst_27303 = (state_27339[7]);var inst_27316 = (state_27339[2]);var inst_27317 = (inst_27303 + 1);var inst_27303__$1 = inst_27317;var state_27339__$1 = (function (){var statearr_27350 = state_27339;(statearr_27350[10] = inst_27316);
(statearr_27350[7] = inst_27303__$1);
return statearr_27350;
})();var statearr_27351_28515 = state_27339__$1;(statearr_27351_28515[2] = null);
(statearr_27351_28515[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 10))
{var inst_27307 = (state_27339[2]);var inst_27308 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27339__$1 = (function (){var statearr_27352 = state_27339;(statearr_27352[11] = inst_27307);
return statearr_27352;
})();var statearr_27353_28516 = state_27339__$1;(statearr_27353_28516[2] = inst_27308);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 11))
{var inst_27303 = (state_27339[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27339,10,Object,null,9);var inst_27312 = chs__$1.call(null,inst_27303);var inst_27313 = done.call(null,inst_27303);var inst_27314 = cljs.core.async.take_BANG_.call(null,inst_27312,inst_27313);var state_27339__$1 = state_27339;var statearr_27354_28517 = state_27339__$1;(statearr_27354_28517[2] = inst_27314);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 12))
{var inst_27325 = (state_27339[12]);var inst_27325__$1 = (state_27339[2]);var inst_27326 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27325__$1);var state_27339__$1 = (function (){var statearr_27355 = state_27339;(statearr_27355[12] = inst_27325__$1);
return statearr_27355;
})();if(cljs.core.truth_(inst_27326))
{var statearr_27356_28518 = state_27339__$1;(statearr_27356_28518[1] = 13);
} else
{var statearr_27357_28519 = state_27339__$1;(statearr_27357_28519[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 13))
{var inst_27328 = cljs.core.async.close_BANG_.call(null,out);var state_27339__$1 = state_27339;var statearr_27358_28520 = state_27339__$1;(statearr_27358_28520[2] = inst_27328);
(statearr_27358_28520[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 14))
{var inst_27325 = (state_27339[12]);var inst_27330 = cljs.core.apply.call(null,f,inst_27325);var state_27339__$1 = state_27339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,16,out,inst_27330);
} else
{if((state_val_27340 === 15))
{var inst_27335 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27359_28521 = state_27339__$1;(statearr_27359_28521[2] = inst_27335);
(statearr_27359_28521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 16))
{var inst_27332 = (state_27339[2]);var state_27339__$1 = (function (){var statearr_27360 = state_27339;(statearr_27360[13] = inst_27332);
return statearr_27360;
})();var statearr_27361_28522 = state_27339__$1;(statearr_27361_28522[2] = null);
(statearr_27361_28522[1] = 2);
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
});})(c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27365[0] = state_machine__22502__auto__);
(statearr_27365[1] = 1);
return statearr_27365;
});
var state_machine__22502__auto____1 = (function (state_27339){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27339);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27366){if((e27366 instanceof Object))
{var ex__22505__auto__ = e27366;var statearr_27367_28523 = state_27339;(statearr_27367_28523[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28524 = state_27339;
state_27339 = G__28524;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_27368 = f__22578__auto__.call(null);(statearr_27368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28507);
return statearr_27368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28507,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28525,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28525,out){
return (function (state_27452){var state_val_27453 = (state_27452[1]);if((state_val_27453 === 1))
{var inst_27423 = cljs.core.vec.call(null,chs);var inst_27424 = inst_27423;var state_27452__$1 = (function (){var statearr_27454 = state_27452;(statearr_27454[7] = inst_27424);
return statearr_27454;
})();var statearr_27455_28526 = state_27452__$1;(statearr_27455_28526[2] = null);
(statearr_27455_28526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 2))
{var inst_27424 = (state_27452[7]);var inst_27426 = cljs.core.count.call(null,inst_27424);var inst_27427 = (inst_27426 > 0);var state_27452__$1 = state_27452;if(cljs.core.truth_(inst_27427))
{var statearr_27456_28527 = state_27452__$1;(statearr_27456_28527[1] = 4);
} else
{var statearr_27457_28528 = state_27452__$1;(statearr_27457_28528[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 3))
{var inst_27450 = (state_27452[2]);var state_27452__$1 = state_27452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else
{if((state_val_27453 === 4))
{var inst_27424 = (state_27452[7]);var state_27452__$1 = state_27452;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27452__$1,7,inst_27424);
} else
{if((state_val_27453 === 5))
{var inst_27446 = cljs.core.async.close_BANG_.call(null,out);var state_27452__$1 = state_27452;var statearr_27458_28529 = state_27452__$1;(statearr_27458_28529[2] = inst_27446);
(statearr_27458_28529[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 6))
{var inst_27448 = (state_27452[2]);var state_27452__$1 = state_27452;var statearr_27459_28530 = state_27452__$1;(statearr_27459_28530[2] = inst_27448);
(statearr_27459_28530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 7))
{var inst_27431 = (state_27452[8]);var inst_27432 = (state_27452[9]);var inst_27431__$1 = (state_27452[2]);var inst_27432__$1 = cljs.core.nth.call(null,inst_27431__$1,0,null);var inst_27433 = cljs.core.nth.call(null,inst_27431__$1,1,null);var inst_27434 = (inst_27432__$1 == null);var state_27452__$1 = (function (){var statearr_27460 = state_27452;(statearr_27460[10] = inst_27433);
(statearr_27460[8] = inst_27431__$1);
(statearr_27460[9] = inst_27432__$1);
return statearr_27460;
})();if(cljs.core.truth_(inst_27434))
{var statearr_27461_28531 = state_27452__$1;(statearr_27461_28531[1] = 8);
} else
{var statearr_27462_28532 = state_27452__$1;(statearr_27462_28532[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 8))
{var inst_27433 = (state_27452[10]);var inst_27431 = (state_27452[8]);var inst_27432 = (state_27452[9]);var inst_27424 = (state_27452[7]);var inst_27436 = (function (){var c = inst_27433;var v = inst_27432;var vec__27429 = inst_27431;var cs = inst_27424;return ((function (c,v,vec__27429,cs,inst_27433,inst_27431,inst_27432,inst_27424,state_val_27453,c__22577__auto___28525,out){
return (function (p1__27369_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27369_SHARP_);
});
;})(c,v,vec__27429,cs,inst_27433,inst_27431,inst_27432,inst_27424,state_val_27453,c__22577__auto___28525,out))
})();var inst_27437 = cljs.core.filterv.call(null,inst_27436,inst_27424);var inst_27424__$1 = inst_27437;var state_27452__$1 = (function (){var statearr_27463 = state_27452;(statearr_27463[7] = inst_27424__$1);
return statearr_27463;
})();var statearr_27464_28533 = state_27452__$1;(statearr_27464_28533[2] = null);
(statearr_27464_28533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 9))
{var inst_27432 = (state_27452[9]);var state_27452__$1 = state_27452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,11,out,inst_27432);
} else
{if((state_val_27453 === 10))
{var inst_27444 = (state_27452[2]);var state_27452__$1 = state_27452;var statearr_27466_28534 = state_27452__$1;(statearr_27466_28534[2] = inst_27444);
(statearr_27466_28534[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27453 === 11))
{var inst_27424 = (state_27452[7]);var inst_27441 = (state_27452[2]);var tmp27465 = inst_27424;var inst_27424__$1 = tmp27465;var state_27452__$1 = (function (){var statearr_27467 = state_27452;(statearr_27467[11] = inst_27441);
(statearr_27467[7] = inst_27424__$1);
return statearr_27467;
})();var statearr_27468_28535 = state_27452__$1;(statearr_27468_28535[2] = null);
(statearr_27468_28535[1] = 2);
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
});})(c__22577__auto___28525,out))
;return ((function (switch__22501__auto__,c__22577__auto___28525,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27472 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27472[0] = state_machine__22502__auto__);
(statearr_27472[1] = 1);
return statearr_27472;
});
var state_machine__22502__auto____1 = (function (state_27452){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27452);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27473){if((e27473 instanceof Object))
{var ex__22505__auto__ = e27473;var statearr_27474_28536 = state_27452;(statearr_27474_28536[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28537 = state_27452;
state_27452 = G__28537;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28525,out))
})();var state__22579__auto__ = (function (){var statearr_27475 = f__22578__auto__.call(null);(statearr_27475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28525);
return statearr_27475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28525,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28538,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28538,out){
return (function (state_27545){var state_val_27546 = (state_27545[1]);if((state_val_27546 === 1))
{var inst_27522 = 0;var state_27545__$1 = (function (){var statearr_27547 = state_27545;(statearr_27547[7] = inst_27522);
return statearr_27547;
})();var statearr_27548_28539 = state_27545__$1;(statearr_27548_28539[2] = null);
(statearr_27548_28539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 2))
{var inst_27522 = (state_27545[7]);var inst_27524 = (inst_27522 < n);var state_27545__$1 = state_27545;if(cljs.core.truth_(inst_27524))
{var statearr_27549_28540 = state_27545__$1;(statearr_27549_28540[1] = 4);
} else
{var statearr_27550_28541 = state_27545__$1;(statearr_27550_28541[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 3))
{var inst_27542 = (state_27545[2]);var inst_27543 = cljs.core.async.close_BANG_.call(null,out);var state_27545__$1 = (function (){var statearr_27551 = state_27545;(statearr_27551[8] = inst_27542);
return statearr_27551;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27545__$1,inst_27543);
} else
{if((state_val_27546 === 4))
{var state_27545__$1 = state_27545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27545__$1,7,ch);
} else
{if((state_val_27546 === 5))
{var state_27545__$1 = state_27545;var statearr_27552_28542 = state_27545__$1;(statearr_27552_28542[2] = null);
(statearr_27552_28542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 6))
{var inst_27540 = (state_27545[2]);var state_27545__$1 = state_27545;var statearr_27553_28543 = state_27545__$1;(statearr_27553_28543[2] = inst_27540);
(statearr_27553_28543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 7))
{var inst_27527 = (state_27545[9]);var inst_27527__$1 = (state_27545[2]);var inst_27528 = (inst_27527__$1 == null);var inst_27529 = cljs.core.not.call(null,inst_27528);var state_27545__$1 = (function (){var statearr_27554 = state_27545;(statearr_27554[9] = inst_27527__$1);
return statearr_27554;
})();if(inst_27529)
{var statearr_27555_28544 = state_27545__$1;(statearr_27555_28544[1] = 8);
} else
{var statearr_27556_28545 = state_27545__$1;(statearr_27556_28545[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 8))
{var inst_27527 = (state_27545[9]);var state_27545__$1 = state_27545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27545__$1,11,out,inst_27527);
} else
{if((state_val_27546 === 9))
{var state_27545__$1 = state_27545;var statearr_27557_28546 = state_27545__$1;(statearr_27557_28546[2] = null);
(statearr_27557_28546[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 10))
{var inst_27537 = (state_27545[2]);var state_27545__$1 = state_27545;var statearr_27558_28547 = state_27545__$1;(statearr_27558_28547[2] = inst_27537);
(statearr_27558_28547[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27546 === 11))
{var inst_27522 = (state_27545[7]);var inst_27532 = (state_27545[2]);var inst_27533 = (inst_27522 + 1);var inst_27522__$1 = inst_27533;var state_27545__$1 = (function (){var statearr_27559 = state_27545;(statearr_27559[7] = inst_27522__$1);
(statearr_27559[10] = inst_27532);
return statearr_27559;
})();var statearr_27560_28548 = state_27545__$1;(statearr_27560_28548[2] = null);
(statearr_27560_28548[1] = 2);
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
});})(c__22577__auto___28538,out))
;return ((function (switch__22501__auto__,c__22577__auto___28538,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27564 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27564[0] = state_machine__22502__auto__);
(statearr_27564[1] = 1);
return statearr_27564;
});
var state_machine__22502__auto____1 = (function (state_27545){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27545);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object))
{var ex__22505__auto__ = e27565;var statearr_27566_28549 = state_27545;(statearr_27566_28549[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28550 = state_27545;
state_27545 = G__28550;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27545){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28538,out))
})();var state__22579__auto__ = (function (){var statearr_27567 = f__22578__auto__.call(null);(statearr_27567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28538);
return statearr_27567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28538,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27575 = (function (ch,f,map_LT_,meta27576){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27576 = meta27576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27575.cljs$lang$type = true;
cljs.core.async.t27575.cljs$lang$ctorStr = "cljs.core.async/t27575";
cljs.core.async.t27575.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27575");
});
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27578 = (function (fn1,_,meta27576,ch,f,map_LT_,meta27579){
this.fn1 = fn1;
this._ = _;
this.meta27576 = meta27576;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27579 = meta27579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27578.cljs$lang$type = true;
cljs.core.async.t27578.cljs$lang$ctorStr = "cljs.core.async/t27578";
cljs.core.async.t27578.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27578");
});})(___$1))
;
cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27568_SHARP_){return f1.call(null,(((p1__27568_SHARP_ == null))?null:self__.f.call(null,p1__27568_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27580){var self__ = this;
var _27580__$1 = this;return self__.meta27579;
});})(___$1))
;
cljs.core.async.t27578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27580,meta27579__$1){var self__ = this;
var _27580__$1 = this;return (new cljs.core.async.t27578(self__.fn1,self__._,self__.meta27576,self__.ch,self__.f,self__.map_LT_,meta27579__$1));
});})(___$1))
;
cljs.core.async.__GT_t27578 = ((function (___$1){
return (function __GT_t27578(fn1__$1,___$2,meta27576__$1,ch__$2,f__$2,map_LT___$2,meta27579){return (new cljs.core.async.t27578(fn1__$1,___$2,meta27576__$1,ch__$2,f__$2,map_LT___$2,meta27579));
});})(___$1))
;
}
return (new cljs.core.async.t27578(fn1,___$1,self__.meta27576,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27577){var self__ = this;
var _27577__$1 = this;return self__.meta27576;
});
cljs.core.async.t27575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27577,meta27576__$1){var self__ = this;
var _27577__$1 = this;return (new cljs.core.async.t27575(self__.ch,self__.f,self__.map_LT_,meta27576__$1));
});
cljs.core.async.__GT_t27575 = (function __GT_t27575(ch__$1,f__$1,map_LT___$1,meta27576){return (new cljs.core.async.t27575(ch__$1,f__$1,map_LT___$1,meta27576));
});
}
return (new cljs.core.async.t27575(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27584 = (function (ch,f,map_GT_,meta27585){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27585 = meta27585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27584.cljs$lang$type = true;
cljs.core.async.t27584.cljs$lang$ctorStr = "cljs.core.async/t27584";
cljs.core.async.t27584.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27584");
});
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27586){var self__ = this;
var _27586__$1 = this;return self__.meta27585;
});
cljs.core.async.t27584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27586,meta27585__$1){var self__ = this;
var _27586__$1 = this;return (new cljs.core.async.t27584(self__.ch,self__.f,self__.map_GT_,meta27585__$1));
});
cljs.core.async.__GT_t27584 = (function __GT_t27584(ch__$1,f__$1,map_GT___$1,meta27585){return (new cljs.core.async.t27584(ch__$1,f__$1,map_GT___$1,meta27585));
});
}
return (new cljs.core.async.t27584(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27590 = (function (ch,p,filter_GT_,meta27591){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27590.cljs$lang$type = true;
cljs.core.async.t27590.cljs$lang$ctorStr = "cljs.core.async/t27590";
cljs.core.async.t27590.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27590");
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27592){var self__ = this;
var _27592__$1 = this;return self__.meta27591;
});
cljs.core.async.t27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27592,meta27591__$1){var self__ = this;
var _27592__$1 = this;return (new cljs.core.async.t27590(self__.ch,self__.p,self__.filter_GT_,meta27591__$1));
});
cljs.core.async.__GT_t27590 = (function __GT_t27590(ch__$1,p__$1,filter_GT___$1,meta27591){return (new cljs.core.async.t27590(ch__$1,p__$1,filter_GT___$1,meta27591));
});
}
return (new cljs.core.async.t27590(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28551,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28551,out){
return (function (state_27654){var state_val_27655 = (state_27654[1]);if((state_val_27655 === 1))
{var state_27654__$1 = state_27654;var statearr_27656_28552 = state_27654__$1;(statearr_27656_28552[2] = null);
(statearr_27656_28552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 2))
{var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,4,ch);
} else
{if((state_val_27655 === 3))
{var inst_27652 = (state_27654[2]);var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else
{if((state_val_27655 === 4))
{var inst_27636 = (state_27654[7]);var inst_27636__$1 = (state_27654[2]);var inst_27637 = (inst_27636__$1 == null);var state_27654__$1 = (function (){var statearr_27657 = state_27654;(statearr_27657[7] = inst_27636__$1);
return statearr_27657;
})();if(cljs.core.truth_(inst_27637))
{var statearr_27658_28553 = state_27654__$1;(statearr_27658_28553[1] = 5);
} else
{var statearr_27659_28554 = state_27654__$1;(statearr_27659_28554[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 5))
{var inst_27639 = cljs.core.async.close_BANG_.call(null,out);var state_27654__$1 = state_27654;var statearr_27660_28555 = state_27654__$1;(statearr_27660_28555[2] = inst_27639);
(statearr_27660_28555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 6))
{var inst_27636 = (state_27654[7]);var inst_27641 = p.call(null,inst_27636);var state_27654__$1 = state_27654;if(cljs.core.truth_(inst_27641))
{var statearr_27661_28556 = state_27654__$1;(statearr_27661_28556[1] = 8);
} else
{var statearr_27662_28557 = state_27654__$1;(statearr_27662_28557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 7))
{var inst_27650 = (state_27654[2]);var state_27654__$1 = state_27654;var statearr_27663_28558 = state_27654__$1;(statearr_27663_28558[2] = inst_27650);
(statearr_27663_28558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 8))
{var inst_27636 = (state_27654[7]);var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27654__$1,11,out,inst_27636);
} else
{if((state_val_27655 === 9))
{var state_27654__$1 = state_27654;var statearr_27664_28559 = state_27654__$1;(statearr_27664_28559[2] = null);
(statearr_27664_28559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 10))
{var inst_27647 = (state_27654[2]);var state_27654__$1 = (function (){var statearr_27665 = state_27654;(statearr_27665[8] = inst_27647);
return statearr_27665;
})();var statearr_27666_28560 = state_27654__$1;(statearr_27666_28560[2] = null);
(statearr_27666_28560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 11))
{var inst_27644 = (state_27654[2]);var state_27654__$1 = state_27654;var statearr_27667_28561 = state_27654__$1;(statearr_27667_28561[2] = inst_27644);
(statearr_27667_28561[1] = 10);
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
});})(c__22577__auto___28551,out))
;return ((function (switch__22501__auto__,c__22577__auto___28551,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27671 = [null,null,null,null,null,null,null,null,null];(statearr_27671[0] = state_machine__22502__auto__);
(statearr_27671[1] = 1);
return statearr_27671;
});
var state_machine__22502__auto____1 = (function (state_27654){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27654);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27672){if((e27672 instanceof Object))
{var ex__22505__auto__ = e27672;var statearr_27673_28562 = state_27654;(statearr_27673_28562[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28563 = state_27654;
state_27654 = G__28563;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28551,out))
})();var state__22579__auto__ = (function (){var statearr_27674 = f__22578__auto__.call(null);(statearr_27674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28551);
return statearr_27674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28551,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_27840){var state_val_27841 = (state_27840[1]);if((state_val_27841 === 1))
{var state_27840__$1 = state_27840;var statearr_27842_28564 = state_27840__$1;(statearr_27842_28564[2] = null);
(statearr_27842_28564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 2))
{var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,4,in$);
} else
{if((state_val_27841 === 3))
{var inst_27838 = (state_27840[2]);var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27840__$1,inst_27838);
} else
{if((state_val_27841 === 4))
{var inst_27781 = (state_27840[7]);var inst_27781__$1 = (state_27840[2]);var inst_27782 = (inst_27781__$1 == null);var state_27840__$1 = (function (){var statearr_27843 = state_27840;(statearr_27843[7] = inst_27781__$1);
return statearr_27843;
})();if(cljs.core.truth_(inst_27782))
{var statearr_27844_28565 = state_27840__$1;(statearr_27844_28565[1] = 5);
} else
{var statearr_27845_28566 = state_27840__$1;(statearr_27845_28566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 5))
{var inst_27784 = cljs.core.async.close_BANG_.call(null,out);var state_27840__$1 = state_27840;var statearr_27846_28567 = state_27840__$1;(statearr_27846_28567[2] = inst_27784);
(statearr_27846_28567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 6))
{var inst_27781 = (state_27840[7]);var inst_27790 = f.call(null,inst_27781);var inst_27791 = cljs.core.seq.call(null,inst_27790);var inst_27792 = inst_27791;var inst_27793 = null;var inst_27794 = 0;var inst_27795 = 0;var state_27840__$1 = (function (){var statearr_27847 = state_27840;(statearr_27847[8] = inst_27794);
(statearr_27847[9] = inst_27795);
(statearr_27847[10] = inst_27793);
(statearr_27847[11] = inst_27792);
return statearr_27847;
})();var statearr_27848_28568 = state_27840__$1;(statearr_27848_28568[2] = null);
(statearr_27848_28568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 7))
{var inst_27836 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27849_28569 = state_27840__$1;(statearr_27849_28569[2] = inst_27836);
(statearr_27849_28569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 8))
{var inst_27794 = (state_27840[8]);var inst_27795 = (state_27840[9]);var inst_27797 = (inst_27795 < inst_27794);var inst_27798 = inst_27797;var state_27840__$1 = state_27840;if(cljs.core.truth_(inst_27798))
{var statearr_27850_28570 = state_27840__$1;(statearr_27850_28570[1] = 10);
} else
{var statearr_27851_28571 = state_27840__$1;(statearr_27851_28571[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 9))
{var inst_27828 = (state_27840[2]);var inst_27829 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27840__$1 = (function (){var statearr_27852 = state_27840;(statearr_27852[12] = inst_27828);
return statearr_27852;
})();if(cljs.core.truth_(inst_27829))
{var statearr_27853_28572 = state_27840__$1;(statearr_27853_28572[1] = 21);
} else
{var statearr_27854_28573 = state_27840__$1;(statearr_27854_28573[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 10))
{var inst_27795 = (state_27840[9]);var inst_27793 = (state_27840[10]);var inst_27800 = cljs.core._nth.call(null,inst_27793,inst_27795);var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,13,out,inst_27800);
} else
{if((state_val_27841 === 11))
{var inst_27806 = (state_27840[13]);var inst_27792 = (state_27840[11]);var inst_27806__$1 = cljs.core.seq.call(null,inst_27792);var state_27840__$1 = (function (){var statearr_27858 = state_27840;(statearr_27858[13] = inst_27806__$1);
return statearr_27858;
})();if(inst_27806__$1)
{var statearr_27859_28574 = state_27840__$1;(statearr_27859_28574[1] = 14);
} else
{var statearr_27860_28575 = state_27840__$1;(statearr_27860_28575[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 12))
{var inst_27826 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27861_28576 = state_27840__$1;(statearr_27861_28576[2] = inst_27826);
(statearr_27861_28576[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 13))
{var inst_27794 = (state_27840[8]);var inst_27795 = (state_27840[9]);var inst_27793 = (state_27840[10]);var inst_27792 = (state_27840[11]);var inst_27802 = (state_27840[2]);var inst_27803 = (inst_27795 + 1);var tmp27855 = inst_27794;var tmp27856 = inst_27793;var tmp27857 = inst_27792;var inst_27792__$1 = tmp27857;var inst_27793__$1 = tmp27856;var inst_27794__$1 = tmp27855;var inst_27795__$1 = inst_27803;var state_27840__$1 = (function (){var statearr_27862 = state_27840;(statearr_27862[8] = inst_27794__$1);
(statearr_27862[9] = inst_27795__$1);
(statearr_27862[10] = inst_27793__$1);
(statearr_27862[11] = inst_27792__$1);
(statearr_27862[14] = inst_27802);
return statearr_27862;
})();var statearr_27863_28577 = state_27840__$1;(statearr_27863_28577[2] = null);
(statearr_27863_28577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 14))
{var inst_27806 = (state_27840[13]);var inst_27808 = cljs.core.chunked_seq_QMARK_.call(null,inst_27806);var state_27840__$1 = state_27840;if(inst_27808)
{var statearr_27864_28578 = state_27840__$1;(statearr_27864_28578[1] = 17);
} else
{var statearr_27865_28579 = state_27840__$1;(statearr_27865_28579[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 15))
{var state_27840__$1 = state_27840;var statearr_27866_28580 = state_27840__$1;(statearr_27866_28580[2] = null);
(statearr_27866_28580[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 16))
{var inst_27824 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27867_28581 = state_27840__$1;(statearr_27867_28581[2] = inst_27824);
(statearr_27867_28581[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 17))
{var inst_27806 = (state_27840[13]);var inst_27810 = cljs.core.chunk_first.call(null,inst_27806);var inst_27811 = cljs.core.chunk_rest.call(null,inst_27806);var inst_27812 = cljs.core.count.call(null,inst_27810);var inst_27792 = inst_27811;var inst_27793 = inst_27810;var inst_27794 = inst_27812;var inst_27795 = 0;var state_27840__$1 = (function (){var statearr_27868 = state_27840;(statearr_27868[8] = inst_27794);
(statearr_27868[9] = inst_27795);
(statearr_27868[10] = inst_27793);
(statearr_27868[11] = inst_27792);
return statearr_27868;
})();var statearr_27869_28582 = state_27840__$1;(statearr_27869_28582[2] = null);
(statearr_27869_28582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 18))
{var inst_27806 = (state_27840[13]);var inst_27815 = cljs.core.first.call(null,inst_27806);var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,20,out,inst_27815);
} else
{if((state_val_27841 === 19))
{var inst_27821 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27870_28583 = state_27840__$1;(statearr_27870_28583[2] = inst_27821);
(statearr_27870_28583[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 20))
{var inst_27806 = (state_27840[13]);var inst_27817 = (state_27840[2]);var inst_27818 = cljs.core.next.call(null,inst_27806);var inst_27792 = inst_27818;var inst_27793 = null;var inst_27794 = 0;var inst_27795 = 0;var state_27840__$1 = (function (){var statearr_27871 = state_27840;(statearr_27871[8] = inst_27794);
(statearr_27871[9] = inst_27795);
(statearr_27871[10] = inst_27793);
(statearr_27871[11] = inst_27792);
(statearr_27871[15] = inst_27817);
return statearr_27871;
})();var statearr_27872_28584 = state_27840__$1;(statearr_27872_28584[2] = null);
(statearr_27872_28584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 21))
{var state_27840__$1 = state_27840;var statearr_27873_28585 = state_27840__$1;(statearr_27873_28585[2] = null);
(statearr_27873_28585[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 22))
{var state_27840__$1 = state_27840;var statearr_27874_28586 = state_27840__$1;(statearr_27874_28586[2] = null);
(statearr_27874_28586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 23))
{var inst_27834 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27875_28587 = state_27840__$1;(statearr_27875_28587[2] = inst_27834);
(statearr_27875_28587[1] = 7);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27879[0] = state_machine__22502__auto__);
(statearr_27879[1] = 1);
return statearr_27879;
});
var state_machine__22502__auto____1 = (function (state_27840){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27840);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27880){if((e27880 instanceof Object))
{var ex__22505__auto__ = e27880;var statearr_27881_28588 = state_27840;(statearr_27881_28588[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28589 = state_27840;
state_27840 = G__28589;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27840){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_27882 = f__22578__auto__.call(null);(statearr_27882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_27882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28590,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28590,out){
return (function (state_27954){var state_val_27955 = (state_27954[1]);if((state_val_27955 === 1))
{var inst_27931 = null;var state_27954__$1 = (function (){var statearr_27956 = state_27954;(statearr_27956[7] = inst_27931);
return statearr_27956;
})();var statearr_27957_28591 = state_27954__$1;(statearr_27957_28591[2] = null);
(statearr_27957_28591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 2))
{var state_27954__$1 = state_27954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27954__$1,4,ch);
} else
{if((state_val_27955 === 3))
{var inst_27951 = (state_27954[2]);var inst_27952 = cljs.core.async.close_BANG_.call(null,out);var state_27954__$1 = (function (){var statearr_27958 = state_27954;(statearr_27958[8] = inst_27951);
return statearr_27958;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27954__$1,inst_27952);
} else
{if((state_val_27955 === 4))
{var inst_27934 = (state_27954[9]);var inst_27934__$1 = (state_27954[2]);var inst_27935 = (inst_27934__$1 == null);var inst_27936 = cljs.core.not.call(null,inst_27935);var state_27954__$1 = (function (){var statearr_27959 = state_27954;(statearr_27959[9] = inst_27934__$1);
return statearr_27959;
})();if(inst_27936)
{var statearr_27960_28592 = state_27954__$1;(statearr_27960_28592[1] = 5);
} else
{var statearr_27961_28593 = state_27954__$1;(statearr_27961_28593[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 5))
{var inst_27934 = (state_27954[9]);var inst_27931 = (state_27954[7]);var inst_27938 = cljs.core._EQ_.call(null,inst_27934,inst_27931);var state_27954__$1 = state_27954;if(inst_27938)
{var statearr_27962_28594 = state_27954__$1;(statearr_27962_28594[1] = 8);
} else
{var statearr_27963_28595 = state_27954__$1;(statearr_27963_28595[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 6))
{var state_27954__$1 = state_27954;var statearr_27965_28596 = state_27954__$1;(statearr_27965_28596[2] = null);
(statearr_27965_28596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 7))
{var inst_27949 = (state_27954[2]);var state_27954__$1 = state_27954;var statearr_27966_28597 = state_27954__$1;(statearr_27966_28597[2] = inst_27949);
(statearr_27966_28597[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 8))
{var inst_27931 = (state_27954[7]);var tmp27964 = inst_27931;var inst_27931__$1 = tmp27964;var state_27954__$1 = (function (){var statearr_27967 = state_27954;(statearr_27967[7] = inst_27931__$1);
return statearr_27967;
})();var statearr_27968_28598 = state_27954__$1;(statearr_27968_28598[2] = null);
(statearr_27968_28598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 9))
{var inst_27934 = (state_27954[9]);var state_27954__$1 = state_27954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27954__$1,11,out,inst_27934);
} else
{if((state_val_27955 === 10))
{var inst_27946 = (state_27954[2]);var state_27954__$1 = state_27954;var statearr_27969_28599 = state_27954__$1;(statearr_27969_28599[2] = inst_27946);
(statearr_27969_28599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 11))
{var inst_27934 = (state_27954[9]);var inst_27943 = (state_27954[2]);var inst_27931 = inst_27934;var state_27954__$1 = (function (){var statearr_27970 = state_27954;(statearr_27970[10] = inst_27943);
(statearr_27970[7] = inst_27931);
return statearr_27970;
})();var statearr_27971_28600 = state_27954__$1;(statearr_27971_28600[2] = null);
(statearr_27971_28600[1] = 2);
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
});})(c__22577__auto___28590,out))
;return ((function (switch__22501__auto__,c__22577__auto___28590,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27975 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27975[0] = state_machine__22502__auto__);
(statearr_27975[1] = 1);
return statearr_27975;
});
var state_machine__22502__auto____1 = (function (state_27954){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27954);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27976){if((e27976 instanceof Object))
{var ex__22505__auto__ = e27976;var statearr_27977_28601 = state_27954;(statearr_27977_28601[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27954);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28602 = state_27954;
state_27954 = G__28602;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27954){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28590,out))
})();var state__22579__auto__ = (function (){var statearr_27978 = f__22578__auto__.call(null);(statearr_27978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28590);
return statearr_27978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28590,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28603 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28603,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28603,out){
return (function (state_28083){var state_val_28084 = (state_28083[1]);if((state_val_28084 === 1))
{var inst_28046 = (new Array(n));var inst_28047 = inst_28046;var inst_28048 = 0;var state_28083__$1 = (function (){var statearr_28085 = state_28083;(statearr_28085[7] = inst_28047);
(statearr_28085[8] = inst_28048);
return statearr_28085;
})();var statearr_28086_28604 = state_28083__$1;(statearr_28086_28604[2] = null);
(statearr_28086_28604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 2))
{var state_28083__$1 = state_28083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28083__$1,4,ch);
} else
{if((state_val_28084 === 3))
{var inst_28081 = (state_28083[2]);var state_28083__$1 = state_28083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28083__$1,inst_28081);
} else
{if((state_val_28084 === 4))
{var inst_28051 = (state_28083[9]);var inst_28051__$1 = (state_28083[2]);var inst_28052 = (inst_28051__$1 == null);var inst_28053 = cljs.core.not.call(null,inst_28052);var state_28083__$1 = (function (){var statearr_28087 = state_28083;(statearr_28087[9] = inst_28051__$1);
return statearr_28087;
})();if(inst_28053)
{var statearr_28088_28605 = state_28083__$1;(statearr_28088_28605[1] = 5);
} else
{var statearr_28089_28606 = state_28083__$1;(statearr_28089_28606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 5))
{var inst_28047 = (state_28083[7]);var inst_28048 = (state_28083[8]);var inst_28056 = (state_28083[10]);var inst_28051 = (state_28083[9]);var inst_28055 = (inst_28047[inst_28048] = inst_28051);var inst_28056__$1 = (inst_28048 + 1);var inst_28057 = (inst_28056__$1 < n);var state_28083__$1 = (function (){var statearr_28090 = state_28083;(statearr_28090[11] = inst_28055);
(statearr_28090[10] = inst_28056__$1);
return statearr_28090;
})();if(cljs.core.truth_(inst_28057))
{var statearr_28091_28607 = state_28083__$1;(statearr_28091_28607[1] = 8);
} else
{var statearr_28092_28608 = state_28083__$1;(statearr_28092_28608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 6))
{var inst_28048 = (state_28083[8]);var inst_28069 = (inst_28048 > 0);var state_28083__$1 = state_28083;if(cljs.core.truth_(inst_28069))
{var statearr_28094_28609 = state_28083__$1;(statearr_28094_28609[1] = 12);
} else
{var statearr_28095_28610 = state_28083__$1;(statearr_28095_28610[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 7))
{var inst_28079 = (state_28083[2]);var state_28083__$1 = state_28083;var statearr_28096_28611 = state_28083__$1;(statearr_28096_28611[2] = inst_28079);
(statearr_28096_28611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 8))
{var inst_28047 = (state_28083[7]);var inst_28056 = (state_28083[10]);var tmp28093 = inst_28047;var inst_28047__$1 = tmp28093;var inst_28048 = inst_28056;var state_28083__$1 = (function (){var statearr_28097 = state_28083;(statearr_28097[7] = inst_28047__$1);
(statearr_28097[8] = inst_28048);
return statearr_28097;
})();var statearr_28098_28612 = state_28083__$1;(statearr_28098_28612[2] = null);
(statearr_28098_28612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 9))
{var inst_28047 = (state_28083[7]);var inst_28061 = cljs.core.vec.call(null,inst_28047);var state_28083__$1 = state_28083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28083__$1,11,out,inst_28061);
} else
{if((state_val_28084 === 10))
{var inst_28067 = (state_28083[2]);var state_28083__$1 = state_28083;var statearr_28099_28613 = state_28083__$1;(statearr_28099_28613[2] = inst_28067);
(statearr_28099_28613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 11))
{var inst_28063 = (state_28083[2]);var inst_28064 = (new Array(n));var inst_28047 = inst_28064;var inst_28048 = 0;var state_28083__$1 = (function (){var statearr_28100 = state_28083;(statearr_28100[7] = inst_28047);
(statearr_28100[8] = inst_28048);
(statearr_28100[12] = inst_28063);
return statearr_28100;
})();var statearr_28101_28614 = state_28083__$1;(statearr_28101_28614[2] = null);
(statearr_28101_28614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 12))
{var inst_28047 = (state_28083[7]);var inst_28071 = cljs.core.vec.call(null,inst_28047);var state_28083__$1 = state_28083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28083__$1,15,out,inst_28071);
} else
{if((state_val_28084 === 13))
{var state_28083__$1 = state_28083;var statearr_28102_28615 = state_28083__$1;(statearr_28102_28615[2] = null);
(statearr_28102_28615[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 14))
{var inst_28076 = (state_28083[2]);var inst_28077 = cljs.core.async.close_BANG_.call(null,out);var state_28083__$1 = (function (){var statearr_28103 = state_28083;(statearr_28103[13] = inst_28076);
return statearr_28103;
})();var statearr_28104_28616 = state_28083__$1;(statearr_28104_28616[2] = inst_28077);
(statearr_28104_28616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28084 === 15))
{var inst_28073 = (state_28083[2]);var state_28083__$1 = state_28083;var statearr_28105_28617 = state_28083__$1;(statearr_28105_28617[2] = inst_28073);
(statearr_28105_28617[1] = 14);
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
});})(c__22577__auto___28603,out))
;return ((function (switch__22501__auto__,c__22577__auto___28603,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28109[0] = state_machine__22502__auto__);
(statearr_28109[1] = 1);
return statearr_28109;
});
var state_machine__22502__auto____1 = (function (state_28083){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28083);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28110){if((e28110 instanceof Object))
{var ex__22505__auto__ = e28110;var statearr_28111_28618 = state_28083;(statearr_28111_28618[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28619 = state_28083;
state_28083 = G__28619;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28083){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28603,out))
})();var state__22579__auto__ = (function (){var statearr_28112 = f__22578__auto__.call(null);(statearr_28112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28603);
return statearr_28112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28603,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28620,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28620,out){
return (function (state_28225){var state_val_28226 = (state_28225[1]);if((state_val_28226 === 1))
{var inst_28184 = [];var inst_28185 = inst_28184;var inst_28186 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28225__$1 = (function (){var statearr_28227 = state_28225;(statearr_28227[7] = inst_28185);
(statearr_28227[8] = inst_28186);
return statearr_28227;
})();var statearr_28228_28621 = state_28225__$1;(statearr_28228_28621[2] = null);
(statearr_28228_28621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 2))
{var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,4,ch);
} else
{if((state_val_28226 === 3))
{var inst_28223 = (state_28225[2]);var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28225__$1,inst_28223);
} else
{if((state_val_28226 === 4))
{var inst_28189 = (state_28225[9]);var inst_28189__$1 = (state_28225[2]);var inst_28190 = (inst_28189__$1 == null);var inst_28191 = cljs.core.not.call(null,inst_28190);var state_28225__$1 = (function (){var statearr_28229 = state_28225;(statearr_28229[9] = inst_28189__$1);
return statearr_28229;
})();if(inst_28191)
{var statearr_28230_28622 = state_28225__$1;(statearr_28230_28622[1] = 5);
} else
{var statearr_28231_28623 = state_28225__$1;(statearr_28231_28623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 5))
{var inst_28193 = (state_28225[10]);var inst_28186 = (state_28225[8]);var inst_28189 = (state_28225[9]);var inst_28193__$1 = f.call(null,inst_28189);var inst_28194 = cljs.core._EQ_.call(null,inst_28193__$1,inst_28186);var inst_28195 = cljs.core.keyword_identical_QMARK_.call(null,inst_28186,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28196 = (inst_28194) || (inst_28195);var state_28225__$1 = (function (){var statearr_28232 = state_28225;(statearr_28232[10] = inst_28193__$1);
return statearr_28232;
})();if(cljs.core.truth_(inst_28196))
{var statearr_28233_28624 = state_28225__$1;(statearr_28233_28624[1] = 8);
} else
{var statearr_28234_28625 = state_28225__$1;(statearr_28234_28625[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 6))
{var inst_28185 = (state_28225[7]);var inst_28210 = inst_28185.length;var inst_28211 = (inst_28210 > 0);var state_28225__$1 = state_28225;if(cljs.core.truth_(inst_28211))
{var statearr_28236_28626 = state_28225__$1;(statearr_28236_28626[1] = 12);
} else
{var statearr_28237_28627 = state_28225__$1;(statearr_28237_28627[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 7))
{var inst_28221 = (state_28225[2]);var state_28225__$1 = state_28225;var statearr_28238_28628 = state_28225__$1;(statearr_28238_28628[2] = inst_28221);
(statearr_28238_28628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 8))
{var inst_28193 = (state_28225[10]);var inst_28185 = (state_28225[7]);var inst_28189 = (state_28225[9]);var inst_28198 = inst_28185.push(inst_28189);var tmp28235 = inst_28185;var inst_28185__$1 = tmp28235;var inst_28186 = inst_28193;var state_28225__$1 = (function (){var statearr_28239 = state_28225;(statearr_28239[7] = inst_28185__$1);
(statearr_28239[8] = inst_28186);
(statearr_28239[11] = inst_28198);
return statearr_28239;
})();var statearr_28240_28629 = state_28225__$1;(statearr_28240_28629[2] = null);
(statearr_28240_28629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 9))
{var inst_28185 = (state_28225[7]);var inst_28201 = cljs.core.vec.call(null,inst_28185);var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28225__$1,11,out,inst_28201);
} else
{if((state_val_28226 === 10))
{var inst_28208 = (state_28225[2]);var state_28225__$1 = state_28225;var statearr_28241_28630 = state_28225__$1;(statearr_28241_28630[2] = inst_28208);
(statearr_28241_28630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 11))
{var inst_28193 = (state_28225[10]);var inst_28189 = (state_28225[9]);var inst_28203 = (state_28225[2]);var inst_28204 = [];var inst_28205 = inst_28204.push(inst_28189);var inst_28185 = inst_28204;var inst_28186 = inst_28193;var state_28225__$1 = (function (){var statearr_28242 = state_28225;(statearr_28242[12] = inst_28203);
(statearr_28242[7] = inst_28185);
(statearr_28242[13] = inst_28205);
(statearr_28242[8] = inst_28186);
return statearr_28242;
})();var statearr_28243_28631 = state_28225__$1;(statearr_28243_28631[2] = null);
(statearr_28243_28631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 12))
{var inst_28185 = (state_28225[7]);var inst_28213 = cljs.core.vec.call(null,inst_28185);var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28225__$1,15,out,inst_28213);
} else
{if((state_val_28226 === 13))
{var state_28225__$1 = state_28225;var statearr_28244_28632 = state_28225__$1;(statearr_28244_28632[2] = null);
(statearr_28244_28632[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 14))
{var inst_28218 = (state_28225[2]);var inst_28219 = cljs.core.async.close_BANG_.call(null,out);var state_28225__$1 = (function (){var statearr_28245 = state_28225;(statearr_28245[14] = inst_28218);
return statearr_28245;
})();var statearr_28246_28633 = state_28225__$1;(statearr_28246_28633[2] = inst_28219);
(statearr_28246_28633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28226 === 15))
{var inst_28215 = (state_28225[2]);var state_28225__$1 = state_28225;var statearr_28247_28634 = state_28225__$1;(statearr_28247_28634[2] = inst_28215);
(statearr_28247_28634[1] = 14);
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
});})(c__22577__auto___28620,out))
;return ((function (switch__22501__auto__,c__22577__auto___28620,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28251[0] = state_machine__22502__auto__);
(statearr_28251[1] = 1);
return statearr_28251;
});
var state_machine__22502__auto____1 = (function (state_28225){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28225);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28252){if((e28252 instanceof Object))
{var ex__22505__auto__ = e28252;var statearr_28253_28635 = state_28225;(statearr_28253_28635[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28636 = state_28225;
state_28225 = G__28636;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28225){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28620,out))
})();var state__22579__auto__ = (function (){var statearr_28254 = f__22578__auto__.call(null);(statearr_28254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28620);
return statearr_28254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28620,out))
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","example-word-linter","lt.plugins.example-linter/example-word-linter",3076569534),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Example word linter",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,ed,words){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"words","words",1127222811),words], null));
}));
lt.plugins.example_linter.lint_words = (function lint_words(editor_text,words){var words_to_find = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.lower_case,words));return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (words_to_find){
return (function (line_no,line){return cljs.core.keep.call(null,((function (words_to_find){
return (function (w){var found_at = clojure.string.lower_case.call(null,line).indexOf(w);if((0 <= found_at))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("You can't say the word "),cljs.core.str(w),cljs.core.str("!")].join(''),new cljs.core.Keyword(null,"severity","severity",2492204655),"error",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,found_at], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(found_at + cljs.core.count.call(null,w))], null)], null);
} else
{return null;
}
});})(words_to_find))
,words_to_find);
});})(words_to_find))
,clojure.string.split.call(null,editor_text,/\n/)));
});
lt.plugins.example_linter.__BEH__lint_words_in_editor = (function __BEH__lint_words_in_editor(obj,editor_text,callback,_){return callback.call(null,lt.plugins.example_linter.lint_words.call(null,editor_text,new cljs.core.Keyword(null,"words","words",1127222811).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__lint_words_in_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.plugins.doc');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","linters","lt.plugins.lt-lint/linters",4588091878),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.lt_lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","linters","lt.plugins.lt-lint/linters",4588091878));
lt.plugins.lt_lint.default_timeout = 5000;
lt.plugins.lt_lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.map_QMARK_.call(null,res);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);
} else
{return and__19791__auto__;
}
})()))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''),res);
} else
{if((cljs.core.coll_QMARK_.call(null,res)) && (!(cljs.core.map_QMARK_.call(null,res))))
{return res;
} else
{return null;
}
}
}
});
lt.plugins.lt_lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__29269){var map__29271 = p__29269;var map__29271__$1 = ((cljs.core.seq_QMARK_.call(null,map__29271))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);var msg = map__29271__$1;var to = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.plugins.lt_lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.plugins.lt_lint.lint_messages_for_cursor = (function lint_messages_for_cursor(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));return cljs.core.seq.call(null,cljs.core.filter.call(null,lt.plugins.lt_lint.is_lint_mark_QMARK_,text_marks));
});
lt.plugins.lt_lint.text_mark__GT_lint_result = (function text_mark__GT_lint_result(text_mark){return cljs.core.js__GT_clj.call(null,text_mark.__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
lt.plugins.lt_lint.on_cursor_activity = (function on_cursor_activity(ed){var temp__4090__auto__ = lt.plugins.lt_lint.lint_messages_for_cursor.call(null,ed);if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = lt.plugins.lt_lint.text_mark__GT_lint_result.call(null,cljs.core.first.call(null,lint_marks));return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"");
}
});
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.plugins.lt_lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (ed,linter_objs){return (function (editor_text,callback,options){lt.objs.editor.off.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.plugins.lt_lint.on_cursor_activity,ed));
lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.plugins.lt_lint.on_cursor_activity,ed));
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.plugins.lt_lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,ch){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,ch){
return (function (state_29363){var state_val_29364 = (state_29363[1]);if((state_val_29364 === 2))
{var inst_29361 = (state_29363[2]);var state_29363__$1 = state_29363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29363__$1,inst_29361);
} else
{if((state_val_29364 === 1))
{var inst_29358 = (function (){return ((function (state_val_29364,c__22577__auto__,ch){
return (function (p1__29272_SHARP_){return cljs.core.assoc.call(null,p1__29272_SHARP_,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701),obj);
});
;})(state_val_29364,c__22577__auto__,ch))
})();var inst_29359 = cljs.core.map.call(null,inst_29358,results);var state_29363__$1 = state_29363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29363__$1,2,ch,inst_29359);
} else
{return null;
}
}
});})(c__22577__auto__,ch))
;return ((function (switch__22501__auto__,c__22577__auto__,ch){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_29368 = [null,null,null,null,null,null,null];(statearr_29368[0] = state_machine__22502__auto__);
(statearr_29368[1] = 1);
return statearr_29368;
});
var state_machine__22502__auto____1 = (function (state_29363){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_29363);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e29369){if((e29369 instanceof Object))
{var ex__22505__auto__ = e29369;var statearr_29370_29452 = state_29363;(statearr_29370_29452[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29453 = state_29363;
state_29363 = G__29453;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_29363){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_29363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,ch))
})();var state__22579__auto__ = (function (){var statearr_29371 = f__22578__auto__.call(null);(statearr_29371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_29371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,ch))
);
return c__22577__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__29372_29454 = cljs.core.seq.call(null,validate_chans);var chunk__29373_29455 = null;var count__29374_29456 = 0;var i__29375_29457 = 0;while(true){
if((i__29375_29457 < count__29374_29456))
{var vec__29376_29458 = cljs.core._nth.call(null,chunk__29373_29455,i__29375_29457);var __29459 = cljs.core.nth.call(null,vec__29376_29458,0,null);var f_29460 = cljs.core.nth.call(null,vec__29376_29458,1,null);var obj_29461 = cljs.core.nth.call(null,vec__29376_29458,2,null);lt.object.raise.call(null,obj_29461,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29460,ed);
{
var G__29462 = seq__29372_29454;
var G__29463 = chunk__29373_29455;
var G__29464 = count__29374_29456;
var G__29465 = (i__29375_29457 + 1);
seq__29372_29454 = G__29462;
chunk__29373_29455 = G__29463;
count__29374_29456 = G__29464;
i__29375_29457 = G__29465;
continue;
}
} else
{var temp__4092__auto___29466 = cljs.core.seq.call(null,seq__29372_29454);if(temp__4092__auto___29466)
{var seq__29372_29467__$1 = temp__4092__auto___29466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29372_29467__$1))
{var c__20551__auto___29468 = cljs.core.chunk_first.call(null,seq__29372_29467__$1);{
var G__29469 = cljs.core.chunk_rest.call(null,seq__29372_29467__$1);
var G__29470 = c__20551__auto___29468;
var G__29471 = cljs.core.count.call(null,c__20551__auto___29468);
var G__29472 = 0;
seq__29372_29454 = G__29469;
chunk__29373_29455 = G__29470;
count__29374_29456 = G__29471;
i__29375_29457 = G__29472;
continue;
}
} else
{var vec__29377_29473 = cljs.core.first.call(null,seq__29372_29467__$1);var __29474 = cljs.core.nth.call(null,vec__29377_29473,0,null);var f_29475 = cljs.core.nth.call(null,vec__29377_29473,1,null);var obj_29476 = cljs.core.nth.call(null,vec__29377_29473,2,null);lt.object.raise.call(null,obj_29476,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29475,ed);
{
var G__29477 = cljs.core.next.call(null,seq__29372_29467__$1);
var G__29478 = null;
var G__29479 = 0;
var G__29480 = 0;
seq__29372_29454 = G__29477;
chunk__29373_29455 = G__29478;
count__29374_29456 = G__29479;
i__29375_29457 = G__29480;
continue;
}
}
} else
{}
}
break;
}
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,validate_chans){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,validate_chans){
return (function (state_29419){var state_val_29420 = (state_29419[1]);if((state_val_29420 === 1))
{var inst_29383 = cljs.core.nth.call(null,validate_chans,0,null);var inst_29384 = cljs.core.nth.call(null,inst_29383,0,null);var inst_29385 = cljs.core.nth.call(null,inst_29383,1,null);var inst_29386 = cljs.core.nth.call(null,inst_29383,2,null);var inst_29387 = cljs.core.nthnext.call(null,validate_chans,1);var inst_29388 = validate_chans;var inst_29389 = cljs.core.PersistentVector.EMPTY;var state_29419__$1 = (function (){var statearr_29421 = state_29419;(statearr_29421[7] = inst_29389);
(statearr_29421[8] = inst_29386);
(statearr_29421[9] = inst_29385);
(statearr_29421[10] = inst_29388);
(statearr_29421[11] = inst_29387);
(statearr_29421[12] = inst_29384);
return statearr_29421;
})();var statearr_29422_29481 = state_29419__$1;(statearr_29422_29481[2] = null);
(statearr_29422_29481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 2))
{var inst_29388 = (state_29419[10]);var inst_29393 = cljs.core.nth.call(null,inst_29388,0,null);var inst_29394 = cljs.core.nth.call(null,inst_29393,0,null);var inst_29395 = cljs.core.nth.call(null,inst_29393,1,null);var inst_29396 = cljs.core.nth.call(null,inst_29393,2,null);var inst_29397 = cljs.core.nthnext.call(null,inst_29388,1);var state_29419__$1 = (function (){var statearr_29423 = state_29419;(statearr_29423[13] = inst_29395);
(statearr_29423[14] = inst_29397);
(statearr_29423[15] = inst_29396);
return statearr_29423;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29419__$1,4,inst_29394);
} else
{if((state_val_29420 === 3))
{var inst_29417 = (state_29419[2]);var state_29419__$1 = state_29419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29419__$1,inst_29417);
} else
{if((state_val_29420 === 4))
{var inst_29396 = (state_29419[15]);var inst_29400 = (state_29419[16]);var inst_29399 = (state_29419[2]);var inst_29400__$1 = lt.plugins.lt_lint.verify_linter_result.call(null,inst_29396,inst_29399);var state_29419__$1 = (function (){var statearr_29424 = state_29419;(statearr_29424[16] = inst_29400__$1);
return statearr_29424;
})();if(cljs.core.truth_(inst_29400__$1))
{var statearr_29425_29482 = state_29419__$1;(statearr_29425_29482[1] = 5);
} else
{var statearr_29426_29483 = state_29419__$1;(statearr_29426_29483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 5))
{var inst_29389 = (state_29419[7]);var inst_29400 = (state_29419[16]);var inst_29402 = cljs.core.conj.call(null,inst_29389,inst_29400);var state_29419__$1 = state_29419;var statearr_29427_29484 = state_29419__$1;(statearr_29427_29484[2] = inst_29402);
(statearr_29427_29484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 6))
{var inst_29389 = (state_29419[7]);var state_29419__$1 = state_29419;var statearr_29428_29485 = state_29419__$1;(statearr_29428_29485[2] = inst_29389);
(statearr_29428_29485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 7))
{var inst_29397 = (state_29419[14]);var inst_29405 = (state_29419[2]);var inst_29406 = cljs.core.seq.call(null,inst_29397);var state_29419__$1 = (function (){var statearr_29429 = state_29419;(statearr_29429[17] = inst_29405);
return statearr_29429;
})();if(inst_29406)
{var statearr_29430_29486 = state_29419__$1;(statearr_29430_29486[1] = 8);
} else
{var statearr_29431_29487 = state_29419__$1;(statearr_29431_29487[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 8))
{var inst_29397 = (state_29419[14]);var inst_29405 = (state_29419[17]);var inst_29388 = inst_29397;var inst_29389 = inst_29405;var state_29419__$1 = (function (){var statearr_29432 = state_29419;(statearr_29432[7] = inst_29389);
(statearr_29432[10] = inst_29388);
return statearr_29432;
})();var statearr_29433_29488 = state_29419__$1;(statearr_29433_29488[2] = null);
(statearr_29433_29488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 9))
{var inst_29405 = (state_29419[17]);var inst_29410 = cljs.core.apply.call(null,cljs.core.concat,inst_29405);var inst_29411 = cljs.core.map.call(null,lt.plugins.lt_lint.__GT_cm_lint_msg,inst_29410);var inst_29412 = cljs.core.clj__GT_js.call(null,inst_29411);var inst_29413 = callback.call(null,inst_29412);var state_29419__$1 = state_29419;var statearr_29434_29489 = state_29419__$1;(statearr_29434_29489[2] = inst_29413);
(statearr_29434_29489[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29420 === 10))
{var inst_29415 = (state_29419[2]);var state_29419__$1 = state_29419;var statearr_29435_29490 = state_29419__$1;(statearr_29435_29490[2] = inst_29415);
(statearr_29435_29490[1] = 3);
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
});})(c__22577__auto__,validate_chans))
;return ((function (switch__22501__auto__,c__22577__auto__,validate_chans){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_29439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29439[0] = state_machine__22502__auto__);
(statearr_29439[1] = 1);
return statearr_29439;
});
var state_machine__22502__auto____1 = (function (state_29419){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_29419);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e29440){if((e29440 instanceof Object))
{var ex__22505__auto__ = e29440;var statearr_29441_29491 = state_29419;(statearr_29441_29491[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29492 = state_29419;
state_29419 = G__29492;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_29419){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_29419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,validate_chans))
})();var state__22579__auto__ = (function (){var statearr_29442 = f__22578__auto__.call(null);(statearr_29442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_29442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,validate_chans))
);
return c__22577__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__29493){
var ed = cljs.core.first(arglist__29493);
var linter_objs = cljs.core.rest(arglist__29493);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.plugins.lt_lint.add_linter = (function add_linter(linters,linter_obj,ed,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,ed,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__29443_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29443_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.plugins.lt_lint.set_cm_lint_settings_BANG_ = (function set_cm_lint_settings_BANG_(ed){var map__29445 = new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var map__29445__$1 = ((cljs.core.seq_QMARK_.call(null,map__29445))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);var change_timeout = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),500);var auto_QMARK_ = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"auto?","auto?",1107086306),true);var fn = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var lint_QMARK_ = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"lint?","lint?",1116881934));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),(cljs.core.truth_(lint_QMARK_)?{"delay": change_timeout, "lintOnChange": auto_QMARK_, "getAnnotations": fn, "async": true}:null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.plugins.lt_lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__29446){var vec__29448 = p__29446;var linter_obj = cljs.core.nth.call(null,vec__29448,0,null);var args = cljs.core.nthnext.call(null,vec__29448,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.plugins.lt_lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.plugins.lt_lint.add_linter,linter_obj,ed,args));var validator_fn = cljs.core.apply.call(null,lt.plugins.lt_lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint?","lint?",1116881934),true,new cljs.core.Keyword(null,"fn","fn",1013907514),validator_fn], null)));
lt.plugins.lt_lint.set_cm_lint_settings_BANG_.call(null,ed);
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","register-linter","lt.plugins.lt-lint/register-linter",3174668797),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_lint.prepare_editor_for_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.lt_lint.__BEH__auto_linting_properties = (function __BEH__auto_linting_properties(ed,enabled_QMARK_,change_timeout){lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto?","auto?",1107086306),enabled_QMARK_,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),change_timeout], null)));
return lt.plugins.lt_lint.set_cm_lint_settings_BANG_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","auto-linting-properties","lt.plugins.lt-lint/auto-linting-properties",2746697402),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_lint.__BEH__auto_linting_properties,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Auto linting settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"enabled?",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"boolean","boolean",1078615962)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"change timeout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","run-linters!","lt.plugins.lt-lint/run-linters!",3509772891),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: run linters for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.__GT_cm_ed.call(null,ed).performLint();
} else
{return null;
}
})], null));
lt.plugins.lt_lint.doc_message_text = (function doc_message_text(p__29449){var map__29451 = p__29449;var map__29451__$1 = ((cljs.core.seq_QMARK_.call(null,map__29451))?cljs.core.apply.call(null,cljs.core.hash_map,map__29451):map__29451);var from_linter = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));var message = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,from_linter))),cljs.core.str(":\n\n"),cljs.core.str(message)].join('');
});
lt.plugins.lt_lint.inline_doc_for_lint_messages = (function inline_doc_for_lint_messages(msgs){var msgs__$1 = cljs.core.map.call(null,lt.plugins.lt_lint.text_mark__GT_lint_result,msgs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msgs__$1)).line], null),new cljs.core.Keyword(null,"name","name",1017277949),"Lint results",new cljs.core.Keyword(null,"doc","doc",1014003882),clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,lt.plugins.lt_lint.doc_message_text,msgs__$1))], null);
});
lt.plugins.lt_lint.show_lint_message = (function show_lint_message(ed,lint_messages){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),lt.plugins.lt_lint.inline_doc_for_lint_messages.call(null,lint_messages));
});
lt.plugins.lt_lint.toggle_lint_message = (function toggle_lint_message(ed){var temp__4090__auto__ = lt.plugins.lt_lint.lint_messages_for_cursor.call(null,ed);if(temp__4090__auto__)
{var lint_messages = temp__4090__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto____$1 = lt.plugins.doc.doc_on_line_QMARK_.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));if(cljs.core.truth_(temp__4090__auto____$1))
{var cur = temp__4090__auto____$1;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.plugins.lt_lint.show_lint_message.call(null,ed,lint_messages);
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No lint message found at cursor...",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","toggle-lint-message","lt.plugins.lt-lint/toggle-lint-message",2461476177),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: toggle lint message",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_lint.toggle_lint_message.call(null,ed);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt-lint_compiled.js.map